import { AiOutlineFilter } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const ScreenCard = () => {
    return (
        <>
            <section>
                <div>
                    <p className="text-[20px] font-medium mb-3 mt-5">Screens</p>
                </div>

                <div className="flex flex-wrap gap-5">
                    <div className=" flex">
                        <p className="text-[14px] w-[100px] font-medium bg-[#F5F5F5] border-2 rounded-full text-center flex items-center gap-2 justify-center"><AiOutlineFilter></AiOutlineFilter> Filter</p>
                        <p className="border border-r-1 ml-4"></p>
                    </div>

                    <ul>
                        <li className="">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-black  rounded-2xl text-white p-[8px] px-5" : "rounded-2xl p-[8px] px-5"
                                }
                            >
                              All
                            </NavLink>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <NavLink
                                to="/popular"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-black rounded-full " : "border rounded-2xl p-[8px] px-5"
                                }
                            >
                                Popular
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                to="/new"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-black rounded-full text-black" : "border rounded-2xl p-[8px] px-5"
                                }
                            >
                                new
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                to="/auth"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-black rounded-full text-black" : "border rounded-2xl p-[8px] px-5"
                                }
                            >
                                Auth
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                to="/shop"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-black rounded-full text-black" : "border rounded-2xl p-[8px] px-5"
                                }
                            >
                               Shop
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                to="/chat"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-black rounded-full text-black" : "border rounded-2xl p-[8px] px-5"
                                }
                            >
                                Chat
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                to="/verification"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-black rounded-full text-black" : "border rounded-2xl p-[8px] px-5"
                                }
                            >
                                TOP Verification
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-black rounded-full text-black" : "border rounded-2xl p-[8px] px-5"
                                }
                            >
                              Dashboard
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                to="/food"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-black rounded-full text-white" : "border rounded-2xl p-[8px] px-5"
                                }
                            >
                                Food
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                to="/restaurant"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-black rounded-full text-white" : "border rounded-2xl p-[8px] px-5"
                                }
                            >
                                Restaurant
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <NavLink
                                to="/fitness"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-black rounded-full text-white" : "border rounded-2xl p-[8px] px-5"
                                }
                            >
                                Fitness
                            </NavLink>
                        </li>
                    </ul>




                </div>


                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 mt-10 space-y-10">
                    <div>
                        <img className="w-[230px] h-[520px] shadow-md rounded-md  mx-auto" src="https://s3-alpha-sig.figma.com/img/6114/ffbc/1372721ebc3f362bd3e59171c5069de6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dUk5Xn2w03TftAqabIZyt9~ccfZ4ZZ9tbvvFDr~kWimqhLVP2aKrICSstpKOVtXxf0ytmWiWm9jA7j~Eu6v7Sjy1Iqz8QUjP5GaIg~zdfkZCSr3tzlELGbc5MHHF2tXjyxn6sZPI2ZdWdDSjjSW2UtljQp59OWLSldsgl-gGMGW0I8p~q0FUTQRL0vTPdADsz~eOcfPjfyZI2Tl~O3vTNqTapQCx~1KN8SyUcdDJofpy2fJb1wdL7FAME90AdQn~KHv3BX~e3drCkV1Gu6ULjHIdXD5h3QswXQ8MIfoRHVKASCzwZK7j3dhuVJxhSn0ZMhDRJhkF4cefyRYy0fpscg__" alt="" />
                    </div>
                    <div>
                        <img className="w-[230px] h-[520px] shadow-md rounded-md  mx-auto" src="https://s3-alpha-sig.figma.com/img/0c25/33ee/2849570eb02c425a93d8b51b62bb65cd?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9MSi474fxB6~cOiM0B7KShps~aUELMa9eHQS5Qj46QVFV14dhGaUa1uFLjbCN96t1J4rDA7XiTNhuUl9hUwt0J5sPb1PuzQlwm99hPoKqa5TfffsLS-5R51JvtXhhTkAsDYCrYjprUbvu5OiaqbchH3PTaQM5eWmQtaiAve53ZN4YMmFmtcMqEjoBXTOolYB1llLf3LLVZwazrm3nnMS0w8oMah-f5DMcxqkZg39ZHN0hxkXlFNPLCMpQmgnkFgofa9T2AJYJvIXqCjq0~UoQ0bj1mBPOjJWnDbOQuy1P7VMzmJ6sN2WtiPj6U9WbcHxa6e9UJPkJYxEx2XVYobAQ__" alt="" />
                    </div>
                    <div>
                        <img className="w-[230px] h-[520px] shadow-md rounded-md  mx-auto" src="https://s3-alpha-sig.figma.com/img/b4df/2928/9d383b47aea96b8a206fb3e0cb060da0?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gcvvGei~FxEnjwWFomD8~Id8U8kNwVHtn-IfaXZVrznrAuTWsy59qBbwDGi87B7X4QbtYk3W7~tHjYbJVYHT98Owma8kTYvIf4CFa~zMxH3nKMY4Z84s~v6VZZ21Shy4C-du029~BgVuh7sy3PC44pqLYGhdNIaV0Hcsk6eo5bzqMq~wpiCkP~5hqn6bKJ2Uo30g4wYWevWknOy7WGoVWonl000VFNTwlZ2TzxFtaGI0vP~kDWkhZoHbAiUjSfKeXjkQZfrp5VQLUTVjWd7vUzxomXetM-ysokjNZ9SiIVeEaVIjmexWu3NmDxc2IAdD7HtHk7UcCZoq~91nsMYHkA__" alt="" />
                    </div>
                    <div>
                        <img className="w-[230px] h-[520px] shadow-md rounded-md  mx-auto" src="https://s3-alpha-sig.figma.com/img/f8e7/9e30/66ec8056d021d9e751e581e4d4ef88b6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S4gYwpG3zLXGFdw~1nUcBmQomF19GArwN7Ei1AQhJbLTtSOcLAivz1Q5pU1oTkH6BvyRMySE6rL9MYH9lik-srCMsi75GAqNkFX9x~1wrxByM-o8KKJuKmP7tVxICzyTbHtEE0GUuGLU6~rEW95M7ZnVq09HYjJR2T9528z33eEYCCWZCz79YVTKX9yMPnoT7cZTxt0LRpCma4HinaxufGFEVIaNF99Scxr3o41ItMFMCWB7WQvuc8LeF~hUtI1-WJtrPB2xNVnRddPpB2nZvys0VPc~ntIxapwNHeyT6WXPJN6HQ37tUvlGkysu6XrXlLCnpJAxjc-f45C22JBLFg__" alt="" />
                    </div>
                    <div>
                        <img className="w-[230px] h-[520px] shadow-md rounded-md  mx-auto" src="https://s3-alpha-sig.figma.com/img/431e/a11f/379be627af7751dfba60dfb1ffe65697?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dO-dRTCf8SHmSvsNC-2ehs9RnfeXX19Zm~tn6y82F4augQ3vOw4ddalUNn6nUa3~LhPimuUuU3ZKtcSQ1SykPesPric-jSAJZNp-ZIIbwlTvxntAd2vUDJKie1cwq3ylet928wuMRcFYY747MZZcOogJnzmK9ifSm1J~bhoTDJuVlSY31p-uaZxENLkha~n2VWhY3c0vxsWxnvtIEElpPmQ3ceabjaS8ZQ~X59yCKdpf0kOEFZx~DOd4WW5IpcPK1elnAusELKuC2ou~9CEfXIIAXVuYD07B1dfc6C43rHtYEcDLdqqjOI8a5T05Dzn4oXppd~x0GQ1L3ToYr8nUKg__" alt="" />
                    </div>
                    <div>
                        <img className="w-[230px] h-[520px] shadow-md rounded-md  mx-auto" src="https://s3-alpha-sig.figma.com/img/12cc/f807/b24989fae382152399c747f0ccac92f3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LC-ndn1Xuro-FJ0mvPQxFpjckQLE~2I4WCG0AqMTJscs5yxncYa4aj12Hdy12bZF9LoaMfVXZt8a2TIgSvCdUKxuw09PZXaXAsG~QM43QnUeJMGyhBhCLZKneXMte4nbfu8OH~Lx9DNEY164vTCsnbv9JjyIh6mWydVM0U-7S~i3G6Sz5IP-WaVA7mtOPPlXPzYtdfSJbQHU0J9kUqureBK9zCgBwWMUrA7qF8Hiprjn9s9rWnGLQefCdDX2LkRoMseuwuc5MN9hwM9wibEbwBOB199TqJtXgEnmJiWnplnbUBVR9O1COUcTLFB6AT3Zzd0B7ynWar2ERqWv~AgUww__" alt="" />
                    </div>
                    <div>
                        <img className="w-[230px] h-[520px] shadow-md rounded-md  mx-auto" src="https://s3-alpha-sig.figma.com/img/2816/d9c8/2992a14dc89e00ecc7847e2e0d118c11?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mcB-aNBO8BWz9x3SuplHEyK67D2swe4l17U20436L50eIA80zA6UfiKiC8HxzvEAgvOO1wyE5dNeD7zdEYIuEVNKXFUdDwuCsOPb0oHBnDSmE0vkrKSEUob0ZTPuFB1W9H9YneyRawuGflIguF8nzs1J3mbVSLSbGFgDsFVvioZiG5T7O0v9qIU3xI2EIW7MtuBhb5ZpRXjA677BprfsjiR3RpWhSjNli3vYw-L7j-Znw46Pt7uS8IlNfakHILMeb98biKjlo5jnXD3WsFExKlNSaeBcZyosGtC-4PIkRdZLzCzK3lkhsGZIukKDaAPoJoPzqoMoz8h1fujtKaZbhw__" alt="" />
                    </div>
                    <div>
                        <img className="w-[230px] h-[520px] shadow-md rounded-md  mx-auto" src="https://s3-alpha-sig.figma.com/img/6fcb/9663/b56d8be10ed15b473d2c16472573bc00?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DtpIKeR-uPAtmHgBWWz17l7a0GA5UR15S2ZAz2efELxQScTuCLgcT~zngvVGJAVyUiou~fZxU3DHuConp6nznfTezZDP~zrOAab8weQl7W5k4cfKHXkX9O2-OMMBrSQ6Vi3izPZPCrAGdZJOeDYoglDQOwrTdTfVWPe3ajgCh-DunpfU6BvLXPrNj12BA2CpNs66Fh4tAMUwuBxkhPPlSoTorU0DZJiXTWYES2GwsfQjWkv-kEY--MPtDWegqqZagFcNZ9yTClWlV5VRqnQ58q6Q7sK~l16ajrkBjIafFWqBBkL1TzqVqN4Ad2SU2BjXbdd0hfWYj5NhjFHeNNuJQw__" alt="" />
                    </div>
                    <div>
                        <img className="w-[230px] h-[520px] shadow-md rounded-md  mx-auto" src="https://s3-alpha-sig.figma.com/img/2483/3872/00182ed98c46ec1cad8eac2ecca321ed?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GDhJ8KX-aUMmUKrRL8Vi81DojcxxhAVP2iZxSpiSQA057ARV--D8e01YPsC0jF2pKKKLQmFFBOIEp46CeL2A0LvKbbxD3OqSele5SIStQhzzUNUe-2x-fMPdI5Hdk~F5fdu7QJunFjaw2veiEFRb1yE2opISxrfPy3jZ5PZxki7RTMjsT1Bdi5yLl8wTzmiGVCBeN2l3YR1UUCa7ba9nRlaZ2aPs3OpX57j-OOJiFxzj6ZCJg5CQ7VcPJ5a5fgw4ytrXczq779VIRl-0bFXihyY39hJfl3AgJw3p8Cq30ztGST2xwTHFvbPWYSyOK07oDaV46yLoehoAhPitcnlkWg__" alt="" />
                    </div>
                    <div>
                        <img className="w-[230px] h-[520px] shadow-md rounded-md  mx-auto" src="https://s3-alpha-sig.figma.com/img/6a7c/cc08/464cecf7e74c096e1ef955406750c4ce?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U1aQI73AEveHQ7Gd0K3WULCZJxcW2POdio29MP3EKPOR6IBequR-FUE6AGS2e3k9MOmB-aM9IqInZP9GWhSuMR7ziE2ghoTUCYrPfA7-pLRrd7mVV25w84t97VwaYdVPiTm3DjGb7Azmv1t12xvPsbVHughUi0LR446yYdr0KnFoZmuOb0JeaohWo6Q4PrYqPvUKtkP~731UoOJb7eqDGeHr5Afjnb1BtGod5C6JcLA6y7jkjUXu07qVwa9Gf8086izRYXLPF2foS7fKocJst~eFfG5H~MR8-C5uDLhQ7RhohfzfvsQRNDPOiZUqZ1qcFbk0wQ~UOHLEKqcT3JytgA__" alt="" />
                    </div>
                </div>

            </section>
        </>
    );
};

export default ScreenCard;