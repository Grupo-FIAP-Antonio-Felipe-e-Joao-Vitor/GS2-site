const Avatar = ({ user, openProfile, setOpenProfile }) => {
  
  const avatar = user.nome[0];
  

    return (
    <button
        className='rounded-full uppercase font-bold cursor-pointer w-10 h-10 flex justify-center items-center text-2xl text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300'
        onClick={() => setOpenProfile(!openProfile)}
    >
        {avatar}
    </button>
  )
}

export default Avatar