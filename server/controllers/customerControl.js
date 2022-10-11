import Customer from "../models/customerModel.js";

export const postCustomer = async (req, res) => {
  const {
    cutomerName,
    custFName,
    resedential,
    occupation,
    custMobile1,
    custMobile2,
    custCnic,
    gender,
    custhomeAddress,
    custofficeAddres,
    custstatus,

    // Product Details
    instprice,
    actInstall,
    actAdvance,
    advanceRev,
    totalRev,
    discount,

    balance,
    company,
    product,
    model,
    serialNo,
    fineTime,

    fineRev,
    fineExp,
    duration,
    instRev,
    instRem,
    status,

    srm,
    rm,
    crc,
    delvMng,
    secondMng,
    inqvOff,
    markOff,

    doo,
    processAT,
    defaulter,
    pto,
    vpn,
    processFee,
    salary,

    // Guaranter 1 Information

    gName,
    gfName,
    grelation,
    gOccupation,
    gmobileNumber1,
    gmobileNumber2,
    gcnic,
    ghomeAddress,
    gofficeAddres,

    // Guaranter 2 information

    g2Name,
    g2fName,
    g2relation,
    g2occupation,
    g2mobileNumber1,
    g2mobileNumber2,
    g2cnic,
    g2homeAddress,
    g2officeAddres,
  } = req.body;
  // //  multiple input file
  const custImage = req.files.custImage.map((it) => it.filename);
  const custCnicImage = req.files.custCnicImage.map((it) => it.filename);
  const gimage = req.files.gimage.map((it) => it.filename);
  const g2image = req.files.g2image.map((it) => it.filename);
  try {
    const result = await Customer.create({
      // customer Info
      cutomerName,
      custFName,
      resedential,
      occupation,
      custMobile1,
      custMobile2,
      custCnic,
      custImage: custImage,
      custCnicImage: custCnicImage,
      gender,
      custhomeAddress,
      custofficeAddres,
      custstatus,

      // Product Details
      instprice,
      actInstall,
      actAdvance,
      advanceRev,
      totalRev,
      discount,

      balance,
      company,
      product,
      model,
      serialNo,
      fineTime,

      fineRev,
      fineExp,
      duration,
      instRev,
      instRem,
      status,

      srm,
      rm,
      crc,
      delvMng,
      secondMng,
      inqvOff,
      markOff,

      doo,
      processAT,
      defaulter,
      pto,
      vpn,
      processFee,
      salary,

      // Guaranter 1 Information

      gName,
      gfName,
      grelation,
      gOccupation,
      gmobileNumber1,
      gmobileNumber2,
      gcnic,
      gimage: gimage,
      ghomeAddress,
      gofficeAddres,

      // Guaranter 2 information

      g2Name,
      g2fName,
      g2relation,
      g2occupation,
      g2mobileNumber1,
      g2mobileNumber2,
      g2cnic,
      g2image: g2image,
      g2homeAddress,
      g2officeAddres,
    });
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

// Customer Get Data
export const getCustomer = async (req, res) => {
  try {
    const result = await Customer.find().populate("installments");
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

// Customer Get Data
export const getSingleCustomerInstallments = async (req, res) => {
  try {
    const result = await Customer.findOne({ _id: req.params.id }).populate(
      "installments"
    );
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};

export const deleteCustomer = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Customer.findByIdAndDelete(id);
    res.status(200).json({
      status: "succes",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
export const updateCustomer = async (req, res) => {
  const id = req.params.id;
  const images = [];
  req.files.inquiryImages.map((it) => {
    return images.push(it.filename);
  });
  const {
    cutomerName,
    custFName,
    resedential,
    occupation,
    custMobile1,
    custMobile2,
    custCnic,
    gender,
    custhomeAddress,
    custofficeAddres,
    custstatus,

    // Product Details
    instprice,
    actInstall,
    actAdvance,
    advanceRev,
    totalRev,
    discount,

    balance,
    company,
    product,
    model,
    serialNo,
    fineTime,

    fineRev,
    fineExp,
    duration,
    instRev,
    instRem,
    status,

    srm,
    rm,
    crc,
    delvMng,
    secondMng,
    inqvOff,
    markOff,

    doo,
    processAT,
    defaulter,
    pto,
    vpn,
    processFee,
    salary,

    // Guaranter 1 Information

    gName,
    gfName,
    grelation,
    gOccupation,
    gmobileNumber1,
    gmobileNumber2,
    gcnic,
    ghomeAddress,
    gofficeAddres,

    // Guaranter 2 information

    g2Name,
    g2fName,
    g2relation,
    g2occupation,
    g2mobileNumber1,
    g2mobileNumber2,
    g2cnic,
    g2homeAddress,
    g2officeAddres,
  } = req.body;
  // console.log("id is", id);
  // console.log("data is", req.body);

  // const custImage = req.files.custImage.map((it) => it.filename);
  // const custCnicImage = req.files.custCnicImage.map((it) => it.filename);
  // const gimage = req.files.gimage.map((it) => it.filename);
  // const g2image = req.files.g2image.map((it) => it.filename);
  // const custImage = "";
  // const custCnicImage = "";
  // const gimage = "";
  // const g2image = "";
  // if (
  //   !req.files.custImage ||
  //   !req.files.custCnicImage ||
  //   !req.files.gimage ||
  //   !req.files.g2image
  // ) {
  //   return null;
  // } else {
  //   custImage = req.files.custImage.map((it) => it.filename);
  //   custCnicImage = req.files.custCnicImage.map((it) => it.filename);
  //   gimage = req.files.gimage.map((it) => it.filename);
  //   g2image = req.files.g2image.map((it) => it.filename);
  // }
  try {
    const result = await Customer.findByIdAndUpdate(
      id,
      {
        // customer Info
        cutomerName,
        custFName,
        resedential,
        occupation,
        custMobile1,
        custMobile2,
        custCnic,
        // custImage: custImage,
        // custCnicImage: custCnicImage,
        gender,
        custhomeAddress,
        custofficeAddres,
        custstatus,

        // Product Details
        instprice,
        actInstall,
        actAdvance,
        advanceRev,
        totalRev,
        discount,

        balance,
        company,
        product,
        model,
        serialNo,
        fineTime,

        fineRev,
        fineExp,
        duration,
        instRev,
        instRem,
        status,

        srm,
        rm,
        crc,
        delvMng,
        secondMng,
        inqvOff,
        markOff,

        doo,
        processAT,
        defaulter,
        pto,
        vpn,
        processFee,
        salary,

        // Guaranter 1 Information

        gName,
        gfName,
        grelation,
        gOccupation,
        gmobileNumber1,
        gmobileNumber2,
        gcnic,
        // gimage: gimage,
        ghomeAddress,
        gofficeAddres,

        // Guaranter 2 information

        g2Name,
        g2fName,
        g2relation,
        g2occupation,
        g2mobileNumber1,
        g2mobileNumber2,
        g2cnic,
        // g2image: g2image,
        g2homeAddress,
        g2officeAddres,

        // updateImages
        inquiryImages: images,
      },
      { new: true }
    );

    res.status(200).json({
      status: "succes",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
  // console.log("aftreUpdating ", result);
};

export const getCustomerbyID = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await Customer.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({
      status: "succes",
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
