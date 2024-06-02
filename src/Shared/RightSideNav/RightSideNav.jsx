import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-3 mb-4">
                <h2 className="text-3xl mb-4">Login With</h2>
                <button className="w-full mb-2 btn border border-blue-200">
                <FcGoogle />
                    Login with Google
                </button>
                <button className="w-full btn border border-blue-200">
                <FaGithub />
                    Login with Github
                </button>
            </div>


            {/* find us on */}
            <div className="p-3 mb-4">
                <h2 className="text-3xl mb-4">Find Us on</h2>
                <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
                <FaFacebook className="mr-3" />
                Facebook
                </a>
                <a className="p-4 flex text-lg items-center border border-t-0" href="">
                <FaTwitter className="mr-3" />
                Twitter
                </a>
                <a className="p-4 flex text-lg items-center border border-t-0 rounded-b-lg" href="">
                <FaInstagram className="mr-3" />
                Instagram
                </a>
            </div>

            {/* q zone */}

            <div className="p-3 mb-4 bg-[#F3F3F3]">
                <h2 className="text-3xl mb-4 text-black">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>

        </div>
    );
};

export default RightSideNav;