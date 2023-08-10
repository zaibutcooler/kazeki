import { FreelanceApplicationType } from "@/database/FreelanceApplication";
import { FreelanceOfferType } from "@/database/FreelanceOffer";
import { JobApplicationType } from "@/database/JobApplication";
import { JobOfferType } from "@/database/JobOffer";
import { ProfileType } from "@/database/UserProfile";
import { truncateText } from "@/utils";
import { useEffect, useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { FaCopy, FaLink, FaShare } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

interface Props {
  profile: ProfileType;
}

const MainDetail: React.FC<Props> = ({ profile }) => {
  const [offers, setOffers] = useState<FreelanceOfferType[] | JobOfferType[]>(
    []
  );

  const [applications, setApplications] = useState<
    JobApplicationType[] | FreelanceApplicationType[]
  >([]);

  useEffect(() => {}, []);

  return (
    <div className=" w-full h-full py-4 font-medium text-gray-700">
      <div className="w-full h-full p-2 md:p-4 ">
        <main className="w-full  flex gap-6 p-4 mb-4 border rounded-md ">
          <section className="w-[110px] md:w-1/3">
            <div className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] bg-blue-500 rounded-full mb-4"></div>
          </section>

          <section className="md:w-2/3">
            <div className="flex justify-between">
              <section>
                <h1 className="font-bold text-lg md:text-2xl mb-2 text-black">
                  {profile.firstName} {profile.lastName}
                </h1>
              </section>
              <section>
                <p className="hidden md:block py-1 px-3 border rounded-full text-xs">
                  Client
                </p>
              </section>
            </div>
            <p className="text-sm ">{profile.phoneNumber}</p>

            <p className="text-sm mb-1">{profile.email}</p>

            <p className="text-sm flex">
              <span className="mr-2"> {profile.city}</span>(
              <span className="text-gray-800 mx-[2px]">{profile.country}</span>)
            </p>
          </section>
        </main>
        <main className="w-full  flex gap-4 flex-col md:flex-row-reverse">
          <section className="md:w-2/5 w-full">
            {profile.client && (
              <div className="border rounded-md p-4 w-full mb-3 ">
                <h2 className="font-semibold mb-2 capitalize ">
                  {profile.company}{" "}
                </h2>
                <div className="flex justify-end">
                  <span className="text-xs py-1 px-3 border rounded-3xl">
                    {profile.industry}
                  </span>
                </div>
              </div>
            )}
            <div className="border rounded-md p-4 w-full  ">
              {profile.links &&
                profile.links.map((item) => (
                  <div key={item.link} className="mb-2">
                    <div className="flex justify-between items-center">
                      <h2 className="font-semibold  text-sm  capitalize">
                        {item.label}
                      </h2>
                      <span className="flex text-xs gap-2 text-gray-500">
                        <a href={item.link} className="p-1 border rounded-sm">
                          <FiExternalLink />
                        </a>
                        <button
                          className="p-1 border rounded-sm"
                          onClick={() => {
                            navigator.clipboard.writeText(item.link);
                          }}>
                          <FaCopy />
                        </button>
                      </span>
                    </div>
                    <a
                      href={item.link}
                      className="font-semibold text-[0.6rem] text-gray-500">
                      {truncateText(item.link, 36)}
                    </a>
                  </div>
                ))}
            </div>
          </section>

          <section className="w-3/5 ">
            <div className="border rounded-md p-4 w-full min-h-[250px] "></div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MainDetail;
