const axios = require("axios");

const testFunction = (req, res) => {
  const deals = [
    "https://www.flipkart.com/hoppup-xo6-gaming-earbuds-35ms-low-latency-rgb-led-13mm-drivers-50h-playtime-bluetooth/p/itma7accf9fb3ec3?pid=ACCHYKHV8BJHYBZU&lid=LSTACCHYKHV8BJHYBZU5HSVAW&marketplace=FLIPKART&store=0pm%2Ffcn&srno=b_1_1&otracker=browse&fm=organic&iid=en_QDJ15yoj7S_6azHbp5QUiT6oA4s7T7eWeVTZ53Zq8DylrZISjz9_NjHBr0AjqcjbKi_yTBg79bYoKIAWsgxLGg%3D%3D&ppt=browse&ppn=browse&ssid=y362s6rf000000001728469430963",
    "https://www.flipkart.com/boat-airdopes-131-elite-anc-w-active-noise-cancellation-60hrs-playback-chrome-design-bluetooth/p/itmdc9a1d94bb133?pid=ACCHYKKEMEVDAXJF&lid=LSTACCHYKKEMEVDAXJFD83WD9&marketplace=FLIPKART&store=0pm%2Ffcn&srno=b_1_8&otracker=browse&fm=organic&iid=0d767fde-51aa-41db-b26c-2f309c4fb7c7.ACCHYKKEMEVDAXJF.SEARCH&ppt=browse&ppn=browse",
  ];

  const dealsString = deals.join(", ");

  const data = JSON.stringify({
    deal: dealsString,
    convert_option: "convert_only",
  });

  const config = {
    method: "post",
    url: "https://ekaro-api.affiliaters.in/api/converter/public",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      const urlArray = response.data.data.split(" ");
      const jsonObject = {
        urls: urlArray,
      };
      console.log(jsonObject);
      res.json(jsonObject);
    })
    .catch(function (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: "An error occurred while processing your request." });
    });
};

module.exports = {
  testFunction,
};
