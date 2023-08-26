import Image from 'next/image'
import code from '../public/code1.png'

function Avator({url, className}){
    return <Image
    className={`h-10 w-10 cursor-pointer transition duration-150 
    transform hover:scale-110 rounded-full ${className} `} 
    src={url}
    alt="profile"
    width={'auto'}
    height={'auto'}
    />
       
}

export default Avator;