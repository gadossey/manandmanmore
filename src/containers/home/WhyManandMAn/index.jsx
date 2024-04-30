import React, { useState, useEffect, useContext } from "react"
import { navigate } from "gatsby"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { ColorModeContext } from "../../../../theme" // Adjust the path accordingly

const WhyManandMAn = () => {
  const theme = useTheme()

  const tabs = [
    {
      id: 1,
      name: "More 4G",
    },
    {
      id: 2,
      name: "My Vodafone",




       
    },
  ]

  const content = [
    {
      id: 1,
      title: "Vodafone 4G Gigabit Network",
      description:
        "Our 4G Gigabit network offers unbeatable signal coverage indoors and outdoors. Unleash new possibilities that have the power to change lives. Enjoy amazing speeds and a seamless internet experience on Vodafone, Ghana’s only Gigabit network.",
    },
    {
      id: 2,
      title: "My Vodafone",
      description:
        "Discover the capabilities of My Vodafone and manage your Vodafone account easily and quickly! Send money for free, buy data, airtime, pay bills, and more on My Vodafone.",
      button: "Download Now!",
      CTA: "https://play.google.com/store/apps/details?id=com.myvodafone.app",
    },
  ]

  const [active, setActive] = useState(1)
  const [activeContent, setActiveContent] = useState(content[0])

  useEffect(() => {
    setActiveContent(content.find(item => item.id === active))
  }, [active])

  const { toggleColorMode } = useContext(ColorModeContext)

  return (
    <div>
      <div className="flex w-100 flex-col-reverse lg:flex-row py-8">
        <div className="bg-vodafone_white lg:w-1/2 px-4">
          <div className="flex justify-center mt-4 mx-auto lg:mx-0">
            {tabs.map(tab => (
              <Typography
                key={tab.id}
                className={`px-2 cursor-pointer py-2 text-sm md:px-6 md:text-lg ${
                  active === tab.id ? "text-black font-bold border-b-2 border-vodafone_red" : "text-anthracite"
                }`}
                onClick={() => setActive(tab.id)}
              >
                {tab.name}
              </Typography>
            ))}
          </div>
          <div className="mt-4 xl:my-12 md:my-12 lg:my-0 lg:mt-4 text-center lg:text-left px-6">
            <Typography variant="h5" component="h4">
              {activeContent.title}
            </Typography>
            <Typography variant="body1" component="p" paragraph>
              {activeContent.description}
            </Typography>
            {!!activeContent.button && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  toggleColorMode()
                  navigate(activeContent.CTA)
                }}
              >
                {activeContent.button}
              </Button>
            )}
          </div>
        </div>
        <div className="mx-auto lg:w-1/2">
          <img
            src="/img/Self-Care-Image.webp"
            alt="self-care"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default WhyManandMAn
