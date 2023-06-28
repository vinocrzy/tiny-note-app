import { PrismaClient } from "@prisma/client";
import express, { Application, Request, Response } from "express";

const app: Application = express();
const prisma = new PrismaClient();

const port: number = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/notes", async (req: Request, res: Response) => {
  try {
    const notes = await prisma.notes.findMany();

    res.json(notes);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.post("/api/notes", async (req, res) => {
  try {
    const note = req?.body;
    const newNote = await prisma.notes.create({
      data: note,
    });

    res.json(newNote);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.put("/api/notes/:id", async (req, res) => {
  try {
    const note = req?.body;
    const { id } = req.params;

    const updatedNote = await prisma.notes.update({
      where: {
        id,
      },
      data: note,
    });

    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.get("/api/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const note = await prisma.notes.findUnique({
      where: {
        id,
      },
    });

    res.json(note);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.delete("/api/notes/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNote = await prisma.notes.delete({
      where: {
        id,
      },
    });

    res.json(deletedNote);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
