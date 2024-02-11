const axios = require('axios');
const readline = require('readline');

// Create interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function translateToHindi(inputText) {
  const options = {
    method: 'GET',
    url: 'https://translate-all-languages.p.rapidapi.com/translate',
    params: {
      toLang: 'hi',
      text: inputText,
      fromLang: 'en'
    },
    headers: {
      'X-RapidAPI-Key': '323d966ff0msh1f556a35701b3acp1fc399jsnf8faa46be989',
      'X-RapidAPI-Host': 'translate-all-languages.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log("Translated text in Hindi: ", response.data.translatedText);
  } catch (error) {
    console.error(error);
  }
}

// Prompt the user to input text
rl.question('Enter the text to translate to Hindi: ', async (inputText) => {
  await translateToHindi(inputText);
  rl.close();
});
