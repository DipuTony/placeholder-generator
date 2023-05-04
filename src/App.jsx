import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [imageSize, setImageSize] = useState('200x200')
  const [textOnImage, setTextOnImage] = useState()
  const [textColor, setTextColor] = useState('#f5f0f0')
  const [backgroundColor, setBackgroundColor] = useState('#bd5656')

  const removeFirst = (data) => {
    const filter = data?.slice(1)
    return filter;
  }

  const download = () => {
    window.open('https://via.placeholder.com/200x200/bd5656/f5f0f0?text=200x200')
  }

  const finalLink = `https://via.placeholder.com/${imageSize}/${removeFirst(backgroundColor)}/${removeFirst(textColor)}?text=${textOnImage || imageSize}`;

  return (
    <>
      <div class="flex h-screen">
        <div class="m-auto">
          <div className='space-x-3'>

            <label className='font-semibold'>Image Size</label>
            <select className='border rounded shadow-md' onChange={(e) => setImageSize(e.target.value)} name="imageSize">
              <option value="200x200">200x200</option>
              <option value="400x400">400x400</option>
              <option value="500x500">500x500</option>
            </select>
          </div>

          <div>
            <label htmlFor="imageText">Text on Image</label>
            <input onChange={(e) => setTextOnImage(e.target.value)} className='border border-gray-200' type="text" value={textOnImage} name='imageText' />
          </div>
          <div>
            <label htmlFor="textColor">Text Color</label>
            <input onChange={(e) => setTextColor(e.target.value)} className='border border-gray-200' type="color" value={textColor} name='textColor' />
          </div>
          <div>
            <label htmlFor="bgColor">Background Color</label>
            <input onChange={(e) => setBackgroundColor(e.target.value)} className='border border-gray-200' type="color" value={backgroundColor} name='bgColor' />
          </div>

          <div className='w-fit h-full border border-gray-400 rounded'>
            {/* <iframe className='w-full h-full' src={`https://via.placeholder.com/${imageSize}/${removeFirst(backgroundColor)}/${removeFirst(textColor)}?text=${textOnImage}`} frameborder="0"></iframe> */}
            <img src={finalLink} alt="Place Holder" />
          </div>
          <button type='button' onClick={download} className='border bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded'>Download</button>

          <div className='border border-gray-200 shadow-lg w-fit p-5'>
            {finalLink}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
