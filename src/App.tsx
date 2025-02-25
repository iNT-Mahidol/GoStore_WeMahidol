import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppStoreIos } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons'

function App() {
  const isIOS = navigator.platform === 'iOS';
  const isAndroid = navigator.platform === 'Android';

  const appStoreLink = 'https://apps.apple.com/us/app/example-app/id1425003959';
  const playStoreLink = 'https://play.google.com/store/apps/details?id=th.ac.mahidol.SCBxMU.WeMahidol';

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="container mx-auto max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
        <h1 className="text-3xl font-bold text-blue-700 text-center">We Mahidol</h1>
        <div className="flex justify-center">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/7e/e1/eb/7ee1eb91-4921-e948-c58f-0552115361ae/AppIcon-1x_U007emarketing-0-6-0-85-220.png/230x0w.webp"
            alt="App Logo"
            className="w-32 h-auto rounded-xl shadow-lg"
          />
        </div>
        <div className="flex flex-col space-y-4">
          { 
          isIOS &&
          (
            <a
              href={appStoreLink}
              className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-md py-3 hover:from-purple-600 hover:to-blue-500 transition duration-300"
            >
              <FontAwesomeIcon icon={faAppStoreIos} className="mr-2" />
              Download on the App Store
            </a>
          )}
          {
          isAndroid && 
          (
            <a
              href={playStoreLink}
              className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-md py-3 hover:from-purple-600 hover:to-blue-500 transition duration-300"
            >
              <FontAwesomeIcon icon={faGooglePlay} className="mr-2" />
              Get it on Google Play
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;