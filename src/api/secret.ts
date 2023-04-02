import { getSession } from "next-auth/react";

export default async (req, res) => {
  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: "Not authorized." });
    return;
  }

  // Get the wallet address if the user is logged in with their wallet
  // Otherwise get their email
  return res.status(200).json({
    message: `This is a secret for ${
      session.user?.address || session.user?.email
    }`,
  });
};

