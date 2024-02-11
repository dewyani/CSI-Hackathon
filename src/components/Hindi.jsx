import React from "react";
import Login_Navbar from "./Login_Navbar";
import login from "../images/login.jpg";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import { Accordion } from "flowbite-react";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";

const Login = () => {
  return (
    <>
      {/* <Login_Navbar/> */}
      <div className="flex-end p-10" href="/loginH" >
        <svg class="w-20 h-10 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18.5A2.5 2.5 0 0 1 7.5 20h0a2.5 2.5 0 0 1-2.4-3.2 3 3 0 0 1-.8-5.2 2.5 2.5 0 0 1 .9-3.2A2.5 2.5 0 0 1 7 5a2.5 2.5 0 0 1 5 .5m0 13v-13m0 13a2.5 2.5 0 0 0 4.5 1.5h0a2.5 2.5 0 0 0 2.4-3.2 3 3 0 0 0 .9-5.2 2.5 2.5 0 0 0-1-3.2A2.5 2.5 0 0 0 17 5a2.5 2.5 0 0 0-5 .5m-8 5a2.5 2.5 0 0 1 3.5-2.3m-.3 8.6a3 3 0 0 1-3-5.2M20 10.5a2.5 2.5 0 0 0-3.5-2.3m.3 8.6a3 3 0 0 0 3-5.2" />
        </svg>
      </div>

      <section class="text-gray-600 body-font mt-7">
        <div class="container mx-auto flex px-5 py-10 mt-12 md:flex-row flex-column items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* <h1 class="title-font sm:text-6xl font-500 text-3xl mx-auto mb-19 pt-3 pb-12 font-medium text-gray-900  ">
              Support Sync
            </h1> */}
            <div className="container mx-auto text-center pb-12">
              <h1 className="text-6xl font-bold text-gray-800 mb-4 font-hammersmith-one">
              सपोर्टसिंक में आपका स्वागत है
                <br />
                <span className="text-3xl text-blue-600">
                  <Typewriter
                    loop
                    cursor
                    cursorStyle="_"
                    typeSpeed={80}
                    deleteSpeed={70}
                    delaySpeed={1000}
                    words={[
                      "जो ग्राहकों की शिकायतों को प्रभावी ढंग से संभालता है",
                      "शिकायत निवारण के एक नए युग का अनुभव करें",
                    ]}
                  />
                </span>
              </h1>
            </div>

            <p className=" mb-8 leading-relaxed text-center  w-3/4 mx-auto text-1.5rem ">
            प्रत्येक व्यवसाय को एक ऑनलाइन शिकायत प्रणाली की आवश्यकता होती है जो प्रदान करती हो
              मल्टीचैनल क्षमताएं, उन्नत रिपोर्टिंग कार्यक्षमताएं
              साथ ही क्रॉस-फंक्शनल सहयोग के लिए एक मंच भी
              तत्काल ग्राहक प्रतिक्रिया प्रणाली।
            </p>

            <div className="flex justify-center items-center mx-auto ">
              <Button gradientDuoTone="purpleToBlue" className="w-60 ">
                <a href="/signup" className="nodecor text-1xl">
                लॉग इन करें
                </a>
              </Button>
            </div>

            <div class="flex w-full md:justify-start justify-center items-end">
              <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4"></div>
            </div>

            <div class="flex lg:flex-row md:flex-col"></div>
          </div>

          <div className="w-3/12">
            <img
              className="object-cover object-center rounded w-70px h-70px pl-2 pr-"
              alt="hero"
              src={login}
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col justify-center items-center p-16 w-full bg-slate-100 ">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
        हमारी शिकायत प्रबंधन प्रणाली की मुख्य विशेषताएं
        </h1>
        <h5 className="mb-12 text-lg">
          {" "}
          हमारी शक्तिशाली सुविधाओं के साथ शिकायतों का कुशलतापूर्वक प्रबंधन और समाधान करें
        </h5>

        <div className="flex gap-6 mb-8 w-10/12 pl-3">
          <Card href="#" className="w-1/2 ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            शिकायत प्रस्तुत करना
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            उपयोगकर्ता सिस्टम के माध्यम से आसानी से अपनी शिकायतें जमा कर सकते हैं।
            </p>
          </Card>

          <Card href="#" className="w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            शिकायत ट्रैकिंग
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            उपयोगकर्ता अपनी शिकायतों की स्थिति देख सकते हैं।
            </p>
          </Card>
        </div>
        <div className="flex gap-6 w-10/12 pl-3">
          <Card href="#" className="w-1/2 ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            इतिहास की समीक्षा करें
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            उपयोगकर्ता अपनी पिछली सभी शिकायतें देख सकते हैं।
            </p>
          </Card>

          <Card href="#" className="w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            विश्लेषिकी और रिपोर्ट
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            व्यापक रिपोर्ट तैयार करें और शिकायत डेटा का विश्लेषण करें
              बेहतर प्रबंधन.
            </p>
          </Card>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-20">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
        अपनी शिकायत निपटान प्रक्रिया को सुव्यवस्थित करें
        </h1>
        <p className="mb-8 text-center w-8/12 mt-3">
        हमारी शिकायत प्रबंधन प्रणाली व्यवसायों को प्रभावी ढंग से प्रबंधित करने में मदद करती है
          ग्राहकों की शिकायतों का समाधान करें. हमारे उपयोगकर्ता-अनुकूल प्लेटफ़ॉर्म के साथ, आप ऐसा कर सकते हैं
          ग्राहक को सुनिश्चित करते हुए शिकायतों को आसानी से ट्रैक करें, प्राथमिकता दें और प्रतिक्रिया दें
          संतुष्टि और वफादारी.
        </p>

        <div className="flex flex-col justify-center items-center w-full">
          <Accordion collapseAll className="w-9/10">
            <Accordion.Panel>
              <Accordion.Title>
              एक शिकायत प्रबंधन प्रणाली मेरे ग्राहकों को कैसे लाभ पहुंचा सकती है?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-prose">
                एक शिकायत प्रबंधन प्रणाली ग्राहकों को आसानी से अनुमति देती है
                  उनकी शिकायतें दर्ज करें, उनकी प्रगति पर नज़र रखें
                  शिकायतें, और समाधान पर समय पर अपडेट प्राप्त करें। यह
                  पारदर्शिता और ग्राहक अनुभव में सुधार होता है।
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
              शिकायत प्रबंधन प्रणाली क्या है?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-prose">
                एक शिकायत प्रबंधन प्रणाली ग्राहकों को आसानी से अनुमति देती है
                  उनकी शिकायतें दर्ज करें, उनकी प्रगति पर नज़र रखें
                  शिकायतें, और समाधान पर समय पर अपडेट प्राप्त करें। यह
                  पारदर्शिता और ग्राहक अनुभव में सुधार होता है।
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
              किसी को शिकायत प्रबंधन प्रणाली का उपयोग क्यों करना चाहिए?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400 max-w-prose">
                एक शिकायत प्रबंधन प्रणाली ग्राहकों को आसानी से अनुमति देती है
                  उनकी शिकायतें दर्ज करें, उनकी प्रगति पर नज़र रखें
                  शिकायतें, और समाधान पर समय पर अपडेट प्राप्त करें। यह
                  पारदर्शिता और ग्राहक अनुभव में सुधार होता है।
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
      <div className="bg-gray-200 h-0.5"></div>
      <Footer container>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Login;
