export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      const { body } = req;
      const { topic, transaction } = body;

      console.log("TOPIC", topic);
      console.log("TRANSACTION", transaction);
      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ err: true });
    }
  }

  return res.status(200).json({ success: "This is not relevant for our code" });
}
