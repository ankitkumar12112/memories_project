import PostMessage from "./../models/postMessage";
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    console.log(postMessage);
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getPost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await PostMessage.findById(id);

    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  post = req.body;
  if (mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");
  const updatePost = await postMessage.findfindByidAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  res.json(updatePost);
};
export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");
  await postMessage.findfindByidAndRemove(id);
  res.json({ message: "post deleted succesfully" });
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");
  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likecount: post.likeCount + 1 },
    { new: true }
  );
  res.json(updatedPost);
};
