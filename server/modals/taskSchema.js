import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    assignBy: {
      type: String,
      required: true,
    },
    created_at: { type: Date, default: Date.now },
  },
  {
    collection: "tasks",
  }
);

const TaskSchema = mongoose.model("Tasks", taskSchema);

export default TaskSchema;
