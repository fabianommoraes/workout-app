import formidable from "formidable";
import { S3 } from "@aws-sdk/client-s3";
import slugify from "slugify";
import { MongoClient } from "mongodb";

const s3 = new S3({
  region: "sa-east-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  }
});

export async function getExercises() {
  let client;

  try {
    client = await MongoClient.connect(
      `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.p1ugi7x.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
    );
  } catch (error) {
    console.log("connection to db error!");
  }

  const database = client.db();
  const exercises = database.collection("my-exercises");
  const exercisesArray = await exercises.find().toArray();

  return exercisesArray;
}

async function saveFormData(fields, files) {
  const base64image = fields.image[0];
  const name = fields.name[0];

  const slug = slugify(name, { lower: true });

  const fileName = `${slug}.gif`;

  const buffer = Buffer.from(
    base64image.replace(/^data:image\/\w+;base64,/, ""),
    "base64"
  );

  const params = {
    Bucket: "my-exercises",
    Key: fileName,
    Body: buffer,
    ContentEncoding: "base64",
    ContentType: "image/gif"
  };

  s3.putObject(params);

  let client;

  try {
    client = await MongoClient.connect(
      `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.p1ugi7x.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
    );
  } catch (error) {
    console.log("connection to db error!");
  }

  const db = client.db();

  const exercise = {
    image: fileName,
    name: name
  };

  try {
    await db.collection("my-exercises").insertOne(exercise);
  } catch (error) {
    client.close();
    console.log("insert to db error!");
    return;
  }

  client.close();
}

async function handlePostFormReq(req, res) {
  const form = formidable({ multiples: true });

  const formData = new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject("error");
      }
      resolve({ fields, files });
    });
  });

  try {
    const { fields, files } = await formData;

    try {
      await saveFormData(fields, files);
      res.status(200).send({ status: "submitted" });
      return;
    } catch (e) {
      res.status(500).send({ status: "something went wrong" });
      return;
    }
  } catch (e) {
    res.status(400).send({ status: "invalid submission" });
    return;
  }
}

export default async function handler(req, res) {
  if (req.method == "POST") {
    await handlePostFormReq(req, res);
  }
  // else {
  //   res.status(404).send("method not found");
  // }

  if (req.method == "GET") {
    const data = await getExercises();
    return res.status(200).json(data);
  }
  // else {
  //   res.status(404).send("method not found");
  // }
}

export const config = {
  api: {
    bodyParser: false
  }
};
