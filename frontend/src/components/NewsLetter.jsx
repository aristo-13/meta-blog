

function NewsLetter() {
  return (
    <div className="bg-white border-rounded-xl flex flex-col items-center justify-center gap-2 p-5 py-10 rounded-xl text-center border dark:bg-gray-500/50 dark:border-none">
        <h1 className="font-bold">Weekly NewsLetter</h1>
        <span className="text-gray-500">Get blog articles and offers via email</span>

        <div className="w-full flex flex-col gap-2">
            <div className="w-full h-[35px] overflow-hidden border rounded-md">
                <input type="text" className="w-full h-full outline-none pl-5 text-black" placeholder="example@gmail.com"/>
            </div>

            <button className="w-full bg-blue-700 text-white p-2 rounded-md">
                Subscribe
            </button>
        </div>
    </div>
  )
}

export default NewsLetter
