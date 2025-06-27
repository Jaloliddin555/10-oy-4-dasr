import React from 'react';
import kitob from './assets/image.png'
import kitob1 from './assets/image 3.png'
import kitob2 from './assets/image (4).png'
import kitob3 from './assets/image (1).png'
import kitob4 from './assets/image 4.png'
import kitob5 from './assets/image (3).png'
import kitob6 from './assets/image 2.png'

const App = () => {
  const books = [
    {
      title: "Tafsiri Hilol",
      author: "Shayx Muhammad Sodiq Muhammad Yusuf",
      description: "Roman XIX asr voqealarini oz ichiga olgan. Murakkab tarixiy hodisalar romaning bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image: kitob
    },
    {
      title: "Ijtimoiy Odoblar",
      author: "Shayx Muhammad Sodiq Muhammad Yusuf",
      description: "Roman XIX asr voqealarini oz ichiga olgan. Murakkab tarixiy hodisalar romaning bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image: kitob1
    },
    {
      title: "Ulamolar Nazdida Vaqtning Qadri",
      author: "Abdulfattoh Abu Gudda",
      description: "Roman XIX asr voqealarini oz ichiga olgan. Murakkab tarixiy hodisalar romaning bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image: kitob2
    },
    {
      title: "Oltin Silsila",
      author: "Shayx Muhammad Sodiq Muhammad Yusuf",
      description: "Roman XIX asr voqealarini oz ichiga olgan. Murakkab tarixiy hodisalar romaning bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image: kitob3
    },
    {
      title: "Ikki Eshik Orasi",
      author: "Abdulla Qodiriy",
      description: "Roman XIX asr voqealarini oz ichiga olgan. Murakkab tarixiy hodisalar romaning bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image: kitob4
    },
    {
      title: "Otkan Kunlar",
      author: "Abdulla Qodiriy",
      description: "Roman XIX asr voqealarini oz ichiga olgan. Murakkab tarixiy hodisalar romaning bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image: kitob5
    },
    {
      title: "Otkan Kunlar",
      author: "Abdulla Qodiriy",
      description: "Roman XIX asr voqealarini oz ichiga olgan. Murakkab tarixiy hodisalar romaning bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image: kitob6
    },
    {
      title: "Otkan Kunlar",
      author: "Abdulla Qodiriy",
      description: "Roman XIX asr voqealarini oz ichiga olgan. Murakkab tarixiy hodisalar romaning bosh qahramonlari Otabek va Kumushbibiining fojeaviy sevgi qissasi atrofida ifodalangan",
      image: kitob5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-black">MY Books</h1>
        <button className="mb-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Add Book
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book, index) => (
            <div key={index} className="flex bg-white shadow-md rounded-lg p-4 space-x-4">
              <img
                src={book.image}
                alt={book.title}
                className="w-20 h-28 object-contain rounded"
              />
              <div>
                <h2 className="text-lg font-semibold text-black">{book.title}</h2>
                <p className="text-sm text-gray-600">{book.author}</p>
                <p className="text-sm mt-2 text-gray-700">{book.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
