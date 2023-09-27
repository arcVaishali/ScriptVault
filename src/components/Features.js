import React from 'react'

const Features = () => {
  return (
    <div className="flex flex-col px-8 py-8 justify-center items-center">
        <span className="text-gray-400 italic text-center">
          An award winning platform
        </span>
        <span className="text-3xl mb-20">
          Why <span className="text-green-800 font-bold underline">choose</span>{" "}
          investing with us?
        </span>

        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-row justify-center items-center">
            <img src="https://i.ibb.co/5BJfv0b/coin.png" width="100"  className="mr-4"/>
            <div className="flex flex-col w-64 px-2 py-2">
              <span className="text-xl">
                  Zero Commission
              </span>
              <span className="text-sm text-gray-500 mb-8">
                India's fastest growing investment platform with{" "}
                <span className="text-black font-bold">20+ Lac</span> users. We
                use edge-cutting technology to ensure that your personal
                information is fully encrypted and securely stored
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <img src="https://i.ibb.co/5BJfv0b/coin.png" width="100"  className="mr-4"/>
            <div className="flex flex-col w-64 px-2 py-2">
              <span className="text-xl">
                  Zero Commission
              </span>
              <span className="text-sm text-gray-500 mb-8">
                India's fastest growing investment platform with{" "}
                <span className="text-black font-bold">20+ Lac</span> users. We
                use edge-cutting technology to ensure that your personal
                information is fully encrypted and securely stored
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <img src="https://i.ibb.co/5BJfv0b/coin.png" width="100" className="mr-4"/>
            <div className="flex flex-col w-64 px-2 py-2">
              <span className="text-xl">
                  Zero Commission
              </span>
              <span className="text-sm text-gray-500 mb-8">
                India's fastest growing investment platform with{" "}
                <span className="text-black font-bold">20+ Lac</span> users. We
                use edge-cutting technology to ensure that your personal
                information is fully encrypted and securely stored
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Features