import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.splite(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }
    next();
  } catch (error) {
    res.status(400).json({ errorMsg: error.message });
  }
};

export const checkAuthAndIsOwner = (req, res, next) => {
  try {
    const token = req.headers.authorization.splite(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    if (!decodedData?.isOwner) {
      return res
        .status(400)
        .json({ message: "Your not allowed to do this operation !" });
    }

    next();
  } catch (error) {
    res.status(400).json({ errorMsg: error.message });
  }
};
