import express from "express";
import bodyParser from "body-parser";
import OpenAI from "openai";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
const port = 7000;
dotenv.config({ path: "./config.env" });
app.use(bodyParser.json());
app.use(cors());
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/marketing_description", async (req, res) => {
  console.log("Entered the Marketing Description API Endpoint");
  const { productName, product_desc_raw, tone_of_voice, target_audience } =
    req.body;

  const prompt = `
    Product Name: ${productName}
    Raw Description: ${product_desc_raw}
    Tone of Voice: ${tone_of_voice}
    Target Audience: ${target_audience}
  
    Based on the information provided, craft a compelling product description for marketing purposes that aligns with the specified tone of voice and appeals to the target audience.
    `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
    });
    console.log(response);
    const productDescription = response.choices[0].message.content;
    res.json({ description: productDescription });
  } catch (error) {
    console.error("Error in generating product description:", error);
    res.status(500).send("Failed to generate product description");
  }
});

app.post("/marketing_headline", async (req, res) => {
  console.log("Entered the Marketing Headline API Endpoint");
  const { productName, product_desc_raw, tone_of_voice, custom_avatar } =
    req.body;

  const prompt = `
    Product Name: ${productName}
    Product Description: ${product_desc_raw}
    Tone of Voice: ${tone_of_voice}
    Custom Avatar: ${custom_avatar}

    Create a catchy and concise single-sentence headline for the product that encapsulates its essence, aligns with the specified tone of voice, and appeals to the product's intended audience.
    `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 50,
    });
    console.log(response);
    const productDescription = response.choices[0].message.content;
    res.json({ description: productDescription });
  } catch (error) {
    console.error("Error in generating product description:", error);
    res.status(500).send("Failed to generate product description");
  }
});

app.post("/marketing_questions", async (req, res) => {
  console.log("Entered the Marketing Questions API Endpoint");
  const { topic, target_audience, tone_of_voice } = req.body;

  const prompt = `
      Topic: ${topic}
      Target Audience: ${target_audience}
      Tone of Voice: ${tone_of_voice}
      
      Create three engaging and creative questions for marketing purposes. These questions should be closely related to the topic and be single line questions, tailored to appeal to the target audience, and reflect the specified tone of voice.
      `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
    });
    console.log(response);
    const productDescription = response.choices[0].message.content;
    res.json({ description: productDescription });
  } catch (error) {
    console.error("Error in generating product description:", error);
    res.status(500).send("Failed to generate product description");
  }
});

app.post("/marketing_proposition", async (req, res) => {
  console.log("Entered the Marketing Unique Value Proposition API Endpoint");
  const { product_desc_raw, tone_of_voice } = req.body;

  const prompt = `
    Product Description: ${product_desc_raw}
    Tone of Voice: ${tone_of_voice}
    
    Craft a unique value proposition for the product based on the product description provided. The UVP should be succinct, highlight the key benefits and features of the product, and be expressed in the specified tone of voice.
    `;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 200,
    });
    console.log(response);
    const productDescription = response.choices[0].message.content;
    res.json({ description: productDescription });
  } catch (error) {
    console.error("Error in generating product description:", error);
    res.status(500).send("Failed to generate product description");
  }
});

app.post("/marketing_pasframework", async (req, res) => {
  console.log("Entered the Marketing PAS Framework API Endpoint");
  const { product_desc_raw, productName, tone_of_voice } = req.body;

  const prompt = `
      Product Name: ${productName}
      Product Description: ${product_desc_raw}
      Tone of Voice: ${tone_of_voice}
      
      Using the PAS (Problem-Agitate-Solution) framework, write content for the marketing of the product. First, identify a problem that the target audience faces, then agitate that problem by highlighting its pain points or consequences, and finally present the product as the solution, using the raw description and specified tone of voice.      `;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 200,
    });
    console.log(response);
    const productDescription = response.choices[0].message.content;
    res.json({ description: productDescription });
  } catch (error) {
    console.error("Error in generating product description:", error);
    res.status(500).send("Failed to generate product description");
  }
});

app.post("/marketing_aidaframework", async (req, res) => {
  console.log("Entered the Marketing AIDA Framework API Endpoint");
  const { productName, product_desc_raw, tone_of_voice } = req.body;

  const prompt = `
    Product Name: ${productName}
    Raw Product Description: ${product_desc_raw}
    Tone of Voice: ${tone_of_voice}

    Create a marketing message for the product using the AIDA (Attention, Interest, Desire, Action) framework. Start by grabbing the audience's attention, then generate interest in the product, followed by creating a desire by highlighting its unique features and benefits, and conclude with a call to action, all while maintaining the specified tone of voice.
    `;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 200,
    });
    console.log(response);
    const productDescription = response.choices[0].message.content;
    res.json({ description: productDescription });
  } catch (error) {
    console.error("Error in generating product description:", error);
    res.status(500).send("Failed to generate product description");
  }
});

app.post("/marketing_featurebenefit", async (req, res) => {
  console.log("Entered the Marketing Feature of Benefit API Endpoint");
  const { product_desc_raw, tone_of_voice } = req.body;

  const prompt = `
    Product Description: ${product_desc_raw}
    Tone of Voice: ${tone_of_voice}

    Transform the key features mentioned in the product description into clear benefits. For each feature, explain how it benefits the user, making sure to align the explanation with the specified tone of voice.
    `;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 200,
    });
    console.log(response);
    const productDescription = response.choices[0].message.content;
    res.json({ description: productDescription });
  } catch (error) {
    console.error("Error in generating product description:", error);
    res.status(500).send("Failed to generate product description");
  }
});

app.post("/marketing_creative", async (req, res) => {
  console.log("Entered the Marketing Creative Story API Endpoint");
  const { plot, tone_of_voice } = req.body;

  const prompt = `
    Plot Details: ${plot}
    Tone of Voice: ${tone_of_voice}

    Create an engaging and creative marketing story based on the provided plot details. The story should be crafted in a way that captivates the audience, effectively incorporates the plot elements, and aligns with the specified tone of voice. The narrative should be compelling and suitable for marketing a product.
    `;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-1106",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
    });
    console.log(response);
    const productDescription = response.choices[0].message.content;
    res.json({ description: productDescription });
  } catch (error) {
    console.error("Error in generating product description:", error);
    res.status(500).send("Failed to generate product description");
  }
});

app.post("/chat", async (req, res) => {
  console.log("Entered the API Endpoint");
  const {
    productName,
    productDescription,
    targetAudience,
    toneOfVoice,
    brandIdentity,
    competitiveLandscape,
    pricePoint,
    distributionChannels,
    visualElements,
    desiredAction,
    legalComplianceInfo,
    culturalSensitivities,
  } = req.body;

  const marketingPrompt = `Create a marketing angle for the following product:

        Product Name: ${productName}
        Product Description: ${productDescription}
        Target Audience: ${targetAudience}
        Tone of Voice: ${toneOfVoice}
        Brand Identity: ${brandIdentity}
        Competitive Landscape: ${competitiveLandscape}
        Price Point: ${pricePoint}
        Distribution Channels: ${distributionChannels}
        Visual Elements: ${visualElements}
        Desired Action: ${desiredAction}
        Legal and Compliance Information: ${legalComplianceInfo}
        Cultural Sensitivities: ${culturalSensitivities}

        Focus on highlighting the unique features and benefits of the product...`;
  console.log(marketingPrompt);
  try {
    console.log("Trying ");
    const chatResponse = await openai.chat.completions.create({
      messages: [{ role: "user", content: marketingPrompt }],
      model: "gpt-3.5-turbo-1106",
    });
    console.log(chatResponse);
    res.json({ response: chatResponse.choices[0].message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
