import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./App.css";
import { AiOutlineVerticalAlignBottom } from "react-icons/ai";
import { MdInsertLink } from "react-icons/md";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://www.plugco.in/public/take_home_sample_feed/")
      .then((res) => {
        setData(res.data.campaigns);
        console.log(res);
      }, [])
      .catch((err) => {
        console.log(err);
      }, []);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="App">
        {data.map((campaigns, campaignIndex) => {
          return (
            <div key={campaignIndex}>
              <div className="CampaignHeader">
                <img
                  src={campaigns.campaign_icon_url}
                  alt="Icon URL"
                  className="CampaignIcon"
                />
                <div className="CampaignInfo">
                  <h2 className="CampaignName">{campaigns.campaign_name}</h2>
                  <p className="PayPerInstall">
                    {campaigns.pay_per_install} per install
                  </p>
                </div>
              </div>
              <div className="MediaContainer">
                {campaigns.medias.map((media, mediaIndex) => (
                  <Fragment key={mediaIndex}>
                    {media.media_type === "video" ? (
                      <img
                        className="MediaIndividual"
                        src={media.cover_photo_url}
                        alt="Influencers Social Media"
                      />
                    ) : (
                      <img
                        className="MediaIndividual"
                        src={media.cover_photo_url}
                        alt="Cover Url"
                      />
                    )}
                    <AiOutlineVerticalAlignBottom className="DownloadIcon" />
                    <MdInsertLink className="LinkIcon" />
                  </Fragment>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
