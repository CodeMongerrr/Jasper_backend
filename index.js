import express from "express";
import bodyParser from "body-parser";
import OpenAI from "openai";
import cors from "cors";
const app = express();
const port = 7000;

app.use(bodyParser.json());
app.use(cors());
const openai = new OpenAI({
  apiKey: "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",
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
    console.log("Trying ")
    const chatResponse = await openai.chat.completions.create({
      messages: [{ role: "user", content: marketingPrompt }],
      model: "gpt-3.5-turbo",
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
