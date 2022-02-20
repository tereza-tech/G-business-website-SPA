import React from "react";
import { STRINGS } from "../../constants/string";
import { Column } from "../../components/Column";
import { Row } from "../../components/Row";
import { Text } from "../../components/Text";
import { Stack } from "../../components/Stack";
import { Image } from "../../components/Image";
import { Button } from "../../components/Button";

const LandingPagePage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-end ml-[auto] mr-[auto] w-[100%]">
      <header className="3xl:mt-[50px] lg:mt-[32px] mt-[42px] mx-[auto] w-[84%] xl:mt-[37px]">
        <Row className="font-alef items-center justify-between px-[0] w-[100%]">
          <Text className="2xl:text-fs27 3xl:min-h-[44px] 3xl:text-fs32 align-top font-normal lg:min-h-[28px] lg:text-fs21 min-h-[37px] text-black_900 text-fs2714716911315918 text-left xl:min-h-[32px] xl:text-fs24">
            <span className="text-black_900 text-fs2714716911315918 align-top font-girassol text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
              A+
            </span>
            <span className="text-black_900 text-fs2714716911315918 align-top font-alef text-left font-normal lg:text-fs21 xl:text-fs24 2xl:text-fs27 3xl:text-fs32">
              {" "}
              Studio
            </span>
          </Text>
          <Row className="3xl:mb-[9px] 3xl:mt-[8px] font-alef items-center lg:mb-[6px] lg:mt-[5px] mb-[8px] mt-[7px] w-[54%] xl:mb-[7px] xl:mt-[6px]">
            <Text className="3xl:min-h-[26px] 3xl:text-fs19 align-top font-normal lg:min-h-[17px] lg:text-fs12 min-h-[22px] text-black_900 text-fs16 text-left tracking-ls1 xl:min-h-[19px] xl:text-fs14">
              {STRINGS["lbl_home"] || ""}
            </Text>
            <Text className="3xl:min-h-[26px] 3xl:ml-[73px] 3xl:text-fs19 align-top font-normal lg:min-h-[17px] lg:ml-[47px] lg:text-fs12 min-h-[22px] ml-[61px] text-black_900 text-fs16 text-left tracking-ls1 xl:min-h-[19px] xl:ml-[54px] xl:text-fs14">
              {STRINGS["lbl_what_we_do"] || ""}
            </Text>
            <Text className="3xl:min-h-[26px] 3xl:ml-[78px] 3xl:text-fs19 align-top font-normal lg:min-h-[17px] lg:ml-[50px] lg:text-fs12 min-h-[22px] ml-[65px] text-black_900 text-fs16 text-left tracking-ls1 xl:min-h-[19px] xl:ml-[57px] xl:text-fs14">
              {STRINGS["lbl_service"] || ""}
            </Text>
            <Text className="3xl:min-h-[26px] 3xl:ml-[73px] 3xl:text-fs19 align-top font-normal lg:min-h-[17px] lg:ml-[47px] lg:text-fs12 min-h-[22px] ml-[61px] text-black_900 text-fs16 text-left tracking-ls1 xl:min-h-[19px] xl:ml-[54px] xl:text-fs14">
              {STRINGS["lbl_project"] || ""}
            </Text>
            <Text className="3xl:min-h-[26px] 3xl:ml-[70px] 3xl:text-fs19 align-top font-normal lg:min-h-[17px] lg:ml-[45px] lg:text-fs12 min-h-[22px] ml-[59px] text-black_900 text-fs16 text-left tracking-ls1 xl:min-h-[19px] xl:ml-[52px] xl:text-fs14">
              {STRINGS["lbl_blog"] || ""}
            </Text>
            <Text className="3xl:min-h-[26px] 3xl:ml-[74px] 3xl:text-fs19 align-top font-normal lg:min-h-[17px] lg:ml-[48px] lg:text-fs12 min-h-[22px] ml-[62px] text-black_900 text-fs16 text-left tracking-ls1 xl:min-h-[19px] xl:ml-[55px] xl:text-fs14">
              {STRINGS["lbl_contact"] || ""}
            </Text>
          </Row>
        </Row>
      </header>
      <Row className="3xl:mt-[44px] items-center justify-end lg:mt-[28px] mt-[37px] w-[100%] xl:mt-[32px]">
        <Stack className="2xl:h-[385px] 3xl:h-[462px] 3xl:mb-[121px] 3xl:ml-[81px] 3xl:mt-[147px] h-[384px] lg:h-[299px] lg:mb-[78px] lg:ml-[52px] lg:mt-[95px] mb-[101px] ml-[68px] mt-[123px] w-[37%] xl:h-[342px] xl:mb-[89px] xl:ml-[60px] xl:mt-[109px]">
          <Image
            src="img_dotornament.svg"
            className="2xl:h-[155px] 3xl:h-[185px] absolute bottom-[0] h-[154px] left-[0] lg:h-[120px] object-contain w-[78%] xl:h-[137px]"
            alt="DotOrnament"
          />
          <Column className="absolute font-alef justify-start right-[0] top-[0] w-[91%]">
            <Text className="3xl:min-h-[64px] 3xl:mr-[12px] 3xl:text-fs48 align-top font-normal lg:min-h-[42px] lg:mr-[7px] lg:text-fs31 min-h-[54px] mr-[10px] text-black_900 text-fs40 text-left xl:min-h-[48px] xl:mr-[8px] xl:text-fs35">
              {STRINGS["msg_a_digital_produ"] || ""}
            </Text>
            <Text className="3xl:min-h-[93px] 3xl:mt-[42px] 3xl:text-fs19 align-top font-normal lg:min-h-[60px] lg:mt-[27px] lg:text-fs12 min-h-[78px] mt-[35px] text-fs16 text-gray_700 text-left w-[100%] xl:min-h-[69px] xl:mt-[31px] xl:text-fs14">
              {STRINGS["msg_leading_digital"] || ""}
            </Text>
            <Button className="3xl:mr-[12px] 3xl:mt-[39px] 3xl:px-[36px] 3xl:py-[24px] 3xl:text-fs24 align-middle bg-indigo_A700 border-bw font-normal lg:mr-[7px] lg:mt-[25px] lg:px-[23px] lg:py-[15px] lg:text-fs15 ml-[1px] mr-[10px] mt-[33px] px-[30px] py-[20px] rounded-radius60 text-center text-fs20 text-white_A700 tracking-ls1 w-[45%] xl:mr-[8px] xl:mt-[29px] xl:px-[26px] xl:py-[17px] xl:text-fs17">
              {STRINGS["lbl_contact_now"] || ""}
            </Button>
          </Column>
        </Stack>
        <Stack className="2xl:h-[609px] 3xl:h-[731px] 3xl:ml-[38px] h-[608px] lg:h-[473px] lg:ml-[24px] ml-[32px] w-[57%] xl:h-[541px] xl:ml-[28px]">
          <div className="2xl:h-[179px] 3xl:h-[214px] 3xl:right-[144px] absolute bg-orange_50 bottom-[0] h-[178px] lg:h-[139px] lg:right-[93px] right-[120px] rounded-bl-[0] rounded-br-[100px] rounded-tl-[0] rounded-tr-[0] w-[22%] xl:h-[159px] xl:right-[106px]"></div>
          <div className="2xl:h-[130px] 3xl:h-[155px] absolute bg-blue_50 h-[129px] left-[0] lg:h-[101px] rounded-radius645 top-[0] w-[16%] xl:h-[115px]"></div>
          <Image
            src="img_image8.png"
            className="2xl:h-[513px] 3xl:h-[615px] absolute h-[512px] lg:h-[399px] right-[0] top-[0] w-[93%] xl:h-[456px]"
            alt="image8"
          />
        </Stack>
      </Row>
      <Column className="3xl:mt-[48px] font-alef justify-start lg:mt-[31px] mt-[40px] w-[100%] xl:mt-[35px]">
        <Text className="3xl:min-h-[64px] 3xl:mx-[144px] 3xl:text-fs48 align-top font-normal lg:min-h-[42px] lg:mx-[93px] lg:text-fs31 min-h-[54px] mx-[120px] text-black_900 text-fs40 text-left xl:min-h-[48px] xl:mx-[106px] xl:text-fs35">
          {STRINGS["lbl_our_client"] || ""}
        </Text>
        <Row className="items-center justify-start w-[100%]">
          <Row className="font-alef w-[84%]">
            <Text className="3xl:min-h-[69px] 3xl:mt-[14px] 3xl:text-fs21 align-top font-normal lg:min-h-[45px] lg:mt-[9px] lg:text-fs14 min-h-[58px] mt-[12px] text-fs18 text-gray_600 text-left w-[29%] xl:min-h-[51px] xl:mt-[10px] xl:text-fs16">
              {STRINGS["msg_several_selecte"] || ""}
            </Text>
            <Image
              src="img_googlelogo.svg"
              className="2xl:h-[50px] 2xl:mb-[18px] 3xl:h-[60px] 3xl:mb-[22px] 3xl:ml-[72px] h-[49.38px] lg:h-[39px] lg:mb-[14px] lg:ml-[46px] lg:mt-[1px] mb-[18.619995px] ml-[60px] mt-[2px] object-contain w-[13%] xl:h-[44px] xl:mb-[16px] xl:ml-[53px] xl:mt-[1px]"
              alt="GoogleLogo"
            />
            <Image
              src="img_airbnblogo.svg"
              className="2xl:h-[53px] 2xl:mb-[17px] 2xl:ml-[59px] 3xl:h-[63px] 3xl:mb-[21px] 3xl:ml-[71px] h-[52.14px] lg:h-[41px] lg:mb-[13px] lg:ml-[46px] mb-[17.859985px] ml-[59.52002px] object-contain w-[14%] xl:h-[47px] xl:mb-[15px] xl:ml-[52px]"
              alt="AirbnbLogo"
            />
            <Image
              src="img_ubereatslogo.svg"
              className="2xl:h-[28px] 2xl:mb-[30px] 2xl:ml-[59px] 3xl:h-[34px] 3xl:mb-[36px] 3xl:ml-[71px] 3xl:mt-[14px] h-[27.73px] lg:h-[22px] lg:mb-[23px] lg:ml-[46px] lg:mt-[9px] mb-[30.27002px] ml-[59.589966px] mt-[12px] object-contain w-[14%] xl:h-[25px] xl:mb-[26px] xl:ml-[53px] xl:mt-[10px]"
              alt="UberEatsLogo"
            />
            <Image
              src="img_amazonlogo.svg"
              className="2xl:h-[43px] 2xl:mb-[10px] 2xl:ml-[59px] 3xl:h-[52px] 3xl:mb-[12px] 3xl:ml-[71px] 3xl:mt-[20px] h-[42.61px] lg:h-[34px] lg:mb-[8px] lg:ml-[46px] lg:mt-[13px] mb-[10.390015px] ml-[59.589966px] mt-[17px] object-contain w-[12%] xl:h-[38px] xl:mb-[9px] xl:ml-[53px] xl:mt-[15px]"
              alt="AmazonLogo"
            />
          </Row>
        </Row>
      </Column>
      <Stack className="2xl:h-[868px] 3xl:h-[1042px] 3xl:ml-[98px] 3xl:mt-[112px] h-[867px] lg:h-[675px] lg:ml-[63px] lg:mt-[73px] ml-[82px] mt-[94px] w-[95%] xl:h-[772px] xl:ml-[72px] xl:mt-[83px]">
        <Row className="3xl:bottom-[43px] 3xl:right-[171px] absolute bottom-[36px] lg:bottom-[28px] lg:right-[111px] right-[143px] w-[51%] xl:bottom-[32px] xl:right-[127px]">
          <Column className="3xl:mb-[447px] bg-white_A700 border border-gray_100 border-solid font-alef items-center justify-center lg:mb-[290px] mb-[373px] rounded-radius40 shadow-bs w-[45%] xl:mb-[331px]">
            <Stack className="2xl:h-[122px] 3xl:h-[146px] 3xl:mt-[46px] bg-gray_50 h-[121px] lg:h-[95px] lg:mt-[30px] mt-[39px] mx-[auto] rounded-radius20 w-[40%] xl:h-[108px] xl:mt-[34px]">
              <Image
                src="img_boxsearch1.svg"
                className="2xl:h-[75px] 3xl:bottom-[27px] 3xl:h-[89px] 3xl:left-[28px] 3xl:right-[27px] 3xl:top-[28px] absolute bottom-[23px] h-[74px] left-[24px] lg:bottom-[17px] lg:h-[58px] lg:left-[18px] lg:right-[17px] lg:top-[18px] object-contain right-[23px] top-[24px] w-[auto] xl:bottom-[20px] xl:h-[66px] xl:left-[21px] xl:right-[20px] xl:top-[21px]"
                alt="boxsearch1"
              />
            </Stack>
            <Text className="3xl:min-h-[79px] 3xl:mt-[37px] 3xl:text-fs28 align-middle font-normal leading-lh lg:min-h-[51px] lg:mt-[24px] lg:text-fs18 min-h-[66px] mt-[31px] mx-[auto] text-black_900 text-center text-fs24 w-[55%] xl:min-h-[58px] xl:mt-[27px] xl:text-fs21">
              {STRINGS["msg_business_idea_p"] || ""}
            </Text>
            <Text className="3xl:mb-[68px] 3xl:min-h-[52px] 3xl:mt-[25px] 3xl:text-fs19 align-middle font-normal lg:mb-[44px] lg:min-h-[34px] lg:mt-[16px] lg:text-fs12 mb-[57px] min-h-[44px] mt-[21px] mx-[auto] text-center text-fs16 text-gray_600 w-[80%] xl:mb-[50px] xl:min-h-[39px] xl:mt-[18px] xl:text-fs14">
              {STRINGS["msg_we_present_you"] || ""}
            </Text>
          </Column>
          <Stack className="2xl:h-[423px] 3xl:h-[507px] 3xl:ml-[40px] 3xl:mt-[396px] h-[422px] lg:h-[329px] lg:ml-[26px] lg:mt-[256px] ml-[34px] mt-[330px] w-[51%] xl:h-[376px] xl:ml-[30px] xl:mt-[293px]">
            <div className="2xl:h-[121px] 3xl:h-[145px] absolute border-bw88 border-pink_A400 border-solid bottom-[0] h-[120px] lg:h-[94px] right-[0] rounded-radius60 w-[35%] xl:h-[107px]"></div>
            <Column className="absolute bg-white_A700 border border-gray_100 border-solid font-alef items-center justify-center left-[0] rounded-radius40 shadow-bs top-[0] w-[89%]">
              <Stack className="2xl:h-[122px] 3xl:h-[146px] 3xl:mt-[46px] bg-teal_50 h-[121px] lg:h-[95px] lg:mt-[30px] mt-[39px] mx-[auto] rounded-radius20 w-[40%] xl:h-[108px] xl:mt-[34px]">
                <Image
                  src="img_chartsquare1.svg"
                  className="2xl:h-[75px] 3xl:bottom-[27px] 3xl:h-[89px] 3xl:left-[28px] 3xl:right-[27px] 3xl:top-[28px] absolute bottom-[23px] h-[74px] left-[24px] lg:bottom-[17px] lg:h-[58px] lg:left-[18px] lg:right-[17px] lg:top-[18px] object-contain right-[23px] top-[24px] w-[auto] xl:bottom-[20px] xl:h-[66px] xl:left-[21px] xl:right-[20px] xl:top-[21px]"
                  alt="chartsquare1"
                />
              </Stack>
              <Text className="3xl:min-h-[79px] 3xl:mt-[37px] 3xl:text-fs28 align-middle font-normal leading-lh lg:min-h-[51px] lg:mt-[24px] lg:text-fs18 min-h-[66px] mt-[31px] mx-[auto] text-black_900 text-center text-fs24 w-[75%] xl:min-h-[58px] xl:mt-[27px] xl:text-fs21">
                {STRINGS["msg_market_analysis"] || ""}
              </Text>
              <Text className="3xl:mb-[68px] 3xl:min-h-[52px] 3xl:mt-[25px] 3xl:text-fs19 align-middle font-normal lg:mb-[44px] lg:min-h-[34px] lg:mt-[16px] lg:text-fs12 mb-[57px] min-h-[44px] mt-[21px] mx-[auto] text-center text-fs16 text-gray_600 w-[80%] xl:mb-[50px] xl:min-h-[39px] xl:mt-[18px] xl:text-fs14">
                {STRINGS["msg_protocols_apart"] || ""}
              </Text>
            </Column>
          </Stack>
        </Row>
        <Stack className="2xl:h-[868px] 3xl:h-[1042px] absolute h-[867px] left-[0] lg:h-[675px] w-[100%] xl:h-[772px]">
          <Image
            src="img_group70.svg"
            className="2xl:h-[155px] 3xl:bottom-[82px] 3xl:h-[185px] 3xl:left-[51px] absolute bottom-[69px] h-[154px] left-[43px] lg:bottom-[53px] lg:h-[120px] lg:left-[33px] object-contain w-[30%] xl:bottom-[61px] xl:h-[137px] xl:left-[38px]"
            alt="Group70"
          />
          <Stack className="2xl:h-[868px] 3xl:h-[1042px] absolute h-[867px] left-[0] lg:h-[675px] w-[100%] xl:h-[772px]">
            <Row className="absolute items-center left-[0] top-[0] w-[100%]">
              <div className="2xl:h-[179px] 3xl:h-[214px] 3xl:mb-[337px] 3xl:mt-[360px] bg-orange_50 h-[178px] lg:h-[139px] lg:mb-[218px] lg:mt-[233px] mb-[281px] mt-[300px] rounded-bl-[0] rounded-br-[100px] rounded-tl-[0] rounded-tr-[0] w-[14%] xl:h-[159px] xl:mb-[249px] xl:mt-[266px]"></div>
              <Stack className="2xl:h-[760px] 3xl:h-[912px] 3xl:ml-[159px] h-[759px] lg:h-[591px] lg:ml-[103px] ml-[133px] w-[78%] xl:h-[676px] xl:ml-[118px]">
                <div className="2xl:h-[620px] 3xl:h-[744px] absolute bg-gray_51 bottom-[0] h-[619px] left-[0] lg:h-[482px] rounded-bl-[0] rounded-br-[0] rounded-tl-[150px] rounded-tr-[0] w-[100%] xl:h-[551px]"></div>
                <Column className="3xl:right-[219px] absolute bg-white_A700 border border-gray_100 border-solid font-alef items-center justify-center lg:right-[142px] right-[183px] rounded-radius40 shadow-bs top-[0] w-[30%] xl:right-[162px]">
                  <Stack className="2xl:h-[122px] 3xl:h-[146px] 3xl:mt-[46px] bg-orange_51 h-[121px] lg:h-[95px] lg:mt-[30px] mt-[39px] mx-[auto] rounded-radius20 w-[40%] xl:h-[108px] xl:mt-[34px]">
                    <Image
                      src="img_emptywallet1.svg"
                      className="2xl:h-[75px] 3xl:bottom-[27px] 3xl:h-[89px] 3xl:left-[28px] 3xl:right-[27px] 3xl:top-[28px] absolute bottom-[23px] h-[74px] left-[24px] lg:bottom-[17px] lg:h-[58px] lg:left-[18px] lg:right-[17px] lg:top-[18px] object-contain right-[23px] top-[24px] w-[auto] xl:bottom-[20px] xl:h-[66px] xl:left-[21px] xl:right-[20px] xl:top-[21px]"
                      alt="emptywallet1"
                    />
                  </Stack>
                  <Text className="3xl:min-h-[79px] 3xl:mt-[37px] 3xl:text-fs28 align-middle font-normal leading-lh lg:min-h-[51px] lg:mt-[24px] lg:text-fs18 min-h-[66px] mt-[31px] mx-[auto] text-black_900 text-center text-fs24 w-[65%] xl:min-h-[58px] xl:mt-[27px] xl:text-fs21">
                    {STRINGS["msg_financial_plann"] || ""}
                  </Text>
                  <Text className="3xl:mb-[68px] 3xl:min-h-[52px] 3xl:mt-[25px] 3xl:text-fs19 align-middle font-normal lg:mb-[44px] lg:min-h-[34px] lg:mt-[16px] lg:text-fs12 mb-[57px] min-h-[44px] mt-[21px] mx-[auto] text-center text-fs16 text-gray_600 w-[80%] xl:mb-[50px] xl:min-h-[39px] xl:mt-[18px] xl:text-fs14">
                    {STRINGS["msg_protocols_apart"] || ""}
                  </Text>
                </Column>
              </Stack>
            </Row>
            <Column className="-translate-y-1/2 3xl:left-[45px] absolute font-alef justify-start left-[38px] lg:left-[29px] top-[50%] w-[30%] xl:left-[33px]">
              <Text className="3xl:min-h-[129px] 3xl:mr-[12px] 3xl:text-fs48 align-top font-normal leading-lh lg:min-h-[84px] lg:mr-[7px] lg:text-fs31 min-h-[108px] ml-[1px] mr-[10px] text-black_900 text-fs40 text-left w-[91%] xl:min-h-[96px] xl:mr-[8px] xl:text-fs35">
                {STRINGS["msg_how_can_we_help"] || ""}
              </Text>
              <Text className="3xl:min-h-[62px] 3xl:mt-[24px] 3xl:text-fs19 align-top font-normal lg:min-h-[40px] lg:mt-[15px] lg:text-fs12 min-h-[52px] mt-[20px] text-fs16 text-gray_700 text-left w-[100%] xl:min-h-[46px] xl:mt-[17px] xl:text-fs14">
                {STRINGS["msg_we_build_readym"] || ""}
              </Text>
            </Column>
            <Column className="-translate-x-1/2 absolute bg-white_A700 border border-gray_100 border-solid bottom-[0] font-alef items-center justify-center left-[50%] rounded-radius40 shadow-bs w-[23%]">
              <Stack className="2xl:h-[122px] 3xl:h-[146px] 3xl:mt-[46px] bg-gray_52 h-[121px] lg:h-[95px] lg:mt-[30px] mt-[39px] mx-[auto] rounded-radius20 w-[40%] xl:h-[108px] xl:mt-[34px]">
                <Image
                  src="img_code11.svg"
                  className="2xl:h-[75px] 3xl:bottom-[27px] 3xl:h-[89px] 3xl:left-[28px] 3xl:right-[27px] 3xl:top-[28px] absolute bottom-[23px] h-[74px] left-[24px] lg:bottom-[17px] lg:h-[58px] lg:left-[18px] lg:right-[17px] lg:top-[18px] object-contain right-[23px] top-[24px] w-[auto] xl:bottom-[20px] xl:h-[66px] xl:left-[21px] xl:right-[20px] xl:top-[21px]"
                  alt="code11"
                />
              </Stack>
              <Text className="3xl:min-h-[79px] 3xl:mt-[37px] 3xl:text-fs28 align-middle font-normal leading-lh lg:min-h-[51px] lg:mt-[24px] lg:text-fs18 min-h-[66px] mt-[31px] mx-[auto] text-black_900 text-center text-fs24 w-[78%] xl:min-h-[58px] xl:mt-[27px] xl:text-fs21">
                {STRINGS["msg_development_web"] || ""}
              </Text>
              <Text className="3xl:mb-[68px] 3xl:min-h-[52px] 3xl:mt-[25px] 3xl:text-fs19 align-middle font-normal lg:mb-[44px] lg:min-h-[34px] lg:mt-[16px] lg:text-fs12 mb-[57px] min-h-[44px] mt-[21px] mx-[auto] text-center text-fs16 text-gray_600 w-[80%] xl:mb-[50px] xl:min-h-[39px] xl:mt-[18px] xl:text-fs14">
                {STRINGS["msg_communication_p"] || ""}
              </Text>
            </Column>
          </Stack>
        </Stack>
      </Stack>
      <Row className="3xl:mt-[175px] justify-start lg:mt-[113px] mt-[146px] w-[100%] xl:mt-[129px]">
        <Stack className="2xl:h-[437px] 3xl:h-[524px] 3xl:ml-[144px] h-[436px] lg:h-[340px] lg:ml-[93px] ml-[120px] w-[42%] xl:h-[388px] xl:ml-[106px]">
          <Stack className="2xl:h-[437px] 3xl:h-[524px] absolute h-[436px] left-[0] lg:h-[340px] w-[100%] xl:h-[388px]">
            <div className="2xl:h-[130px] 3xl:h-[155px] absolute bg-orange_50 bottom-[0] h-[129px] lg:h-[101px] right-[0] rounded-radius645 w-[22%] xl:h-[115px]"></div>
            <Image
              src="img_unsplashbzqu01.png"
              className="2xl:h-[373px] 3xl:h-[447px] absolute h-[372px] left-[0] lg:h-[290px] top-[0] w-[94%] xl:h-[331px]"
              alt="unsplashbzqU01"
            />
          </Stack>
          <Image
            src="img_playroundedbu.svg"
            className="2xl:h-[79px] 3xl:h-[94px] 3xl:left-[283px] 3xl:top-[168px] absolute h-[78px] left-[236px] lg:h-[61px] lg:left-[183px] lg:top-[108px] object-contain top-[140px] w-[auto] xl:h-[70px] xl:left-[209px] xl:top-[124px]"
            alt="playroundedbu"
          />
        </Stack>
        <Stack className="2xl:h-[257px] 3xl:h-[308px] 3xl:mb-[146px] 3xl:ml-[46px] 3xl:mr-[144px] 3xl:mt-[69px] font-alef h-[256px] lg:h-[200px] lg:mb-[94px] lg:ml-[30px] lg:mr-[93px] lg:mt-[45px] mb-[122px] ml-[39px] mr-[120px] mt-[58px] w-[40%] xl:h-[228px] xl:mb-[108px] xl:ml-[34px] xl:mr-[106px] xl:mt-[51px]">
          <div className="2xl:h-[179px] 3xl:h-[214px] absolute bg-gray_101 h-[178px] left-[0] lg:h-[139px] rounded-bl-[0] rounded-br-[100px] rounded-tl-[0] rounded-tr-[0] top-[0] w-[32%] xl:h-[159px]"></div>
          <Text className="3xl:min-h-[124px] 3xl:text-fs19 absolute align-top bottom-[0] font-normal lg:min-h-[80px] lg:text-fs12 min-h-[104px] right-[0] text-fs16 text-gray_700 text-left w-[94%] xl:min-h-[92px] xl:text-fs14">
            {STRINGS["msg_our_business_pl"] || ""}
          </Text>
          <Text className="3xl:left-[46px] 3xl:min-h-[129px] 3xl:text-fs48 3xl:top-[28px] absolute align-top font-normal leading-lh left-[39px] lg:left-[30px] lg:min-h-[84px] lg:text-fs31 lg:top-[18px] min-h-[108px] text-black_900 text-fs40 text-left top-[24px] w-[83%] xl:left-[34px] xl:min-h-[96px] xl:text-fs35 xl:top-[21px]">
            {STRINGS["msg_great_digital_p"] || ""}
          </Text>
        </Stack>
      </Row>
      <Row className="3xl:ml-[98px] 3xl:mr-[82px] 3xl:mt-[140px] justify-start lg:ml-[63px] lg:mr-[53px] lg:mt-[91px] ml-[82px] mr-[69px] mt-[117px] w-[88%] xl:ml-[72px] xl:mr-[61px] xl:mt-[104px]">
        <Column className="font-alef items-center justify-start w-[72%]">
          <Text className="3xl:min-h-[64px] 3xl:ml-[450px] 3xl:mr-[69px] 3xl:text-fs48 align-middle font-normal lg:min-h-[42px] lg:ml-[291px] lg:mr-[45px] lg:text-fs31 min-h-[54px] ml-[375px] mr-[58px] text-black_900 text-center text-fs40 xl:min-h-[48px] xl:ml-[333px] xl:mr-[51px] xl:text-fs35">
            {STRINGS["msg_what_our_happy"] || ""}
          </Text>
          <Text className="3xl:min-h-[34px] 3xl:ml-[383px] 3xl:mt-[14px] 3xl:text-fs21 align-middle font-normal lg:min-h-[22px] lg:ml-[248px] lg:mt-[9px] lg:text-fs14 min-h-[29px] ml-[319px] mt-[12px] text-center text-fs18 text-gray_600 xl:min-h-[25px] xl:ml-[283px] xl:mt-[10px] xl:text-fs16">
            {STRINGS["msg_several_selecte"] || ""}
          </Text>
          <Row className="3xl:mt-[85px] items-center justify-between lg:mt-[55px] mt-[71px] px-[0] w-[100%] xl:mt-[63px]">
            <Stack className="2xl:h-[432px] 3xl:h-[518px] h-[431px] lg:h-[336px] w-[49%] xl:h-[384px]">
              <Image
                src="img_dot.svg"
                className="2xl:h-[155px] 3xl:h-[185px] absolute h-[154px] lg:h-[120px] object-contain right-[0] top-[0] w-[45%] xl:h-[137px]"
                alt="Dot"
              />
              <div className="2xl:h-[121px] 3xl:bottom-[14px] 3xl:h-[145px] absolute border-bw88 border-pink_A400 border-solid bottom-[12px] h-[120px] left-[0] lg:bottom-[9px] lg:h-[94px] rounded-radius60 w-[28%] xl:bottom-[10px] xl:h-[107px]"></div>
              <Image
                src="img_unsplashmtztgv.png"
                className="2xl:h-[390px] 3xl:h-[468px] 3xl:left-[12px] absolute bottom-[0] h-[389px] left-[10px] lg:h-[303px] lg:left-[7px] w-[auto] xl:h-[347px] xl:left-[8px]"
                alt="unsplashMTZTGv"
              />
            </Stack>
            <Column className="3xl:mb-[144px] 3xl:mr-[34px] 3xl:mt-[151px] font-alef justify-start lg:mb-[93px] lg:mr-[22px] lg:mt-[98px] mb-[120px] mr-[29px] mt-[126px] w-[46%] xl:mb-[106px] xl:mr-[25px] xl:mt-[112px]">
              <Text className="3xl:min-h-[39px] 3xl:mr-[12px] 3xl:text-fs28 align-middle font-normal lg:min-h-[25px] lg:mr-[7px] lg:text-fs18 min-h-[33px] mr-[10px] text-black_900 text-center text-fs24 xl:min-h-[29px] xl:mr-[8px] xl:text-fs21">
                {STRINGS["lbl_matthew_paul"] || ""}
              </Text>
              <Text className="3xl:min-h-[93px] 3xl:mt-[21px] 3xl:text-fs19 align-top font-normal lg:min-h-[60px] lg:mt-[14px] lg:text-fs12 min-h-[78px] mt-[18px] text-fs16 text-gray_700 text-left w-[100%] xl:min-h-[69px] xl:mt-[16px] xl:text-fs14">
                {STRINGS["msg_perfect_very_g"] || ""}
              </Text>
              <Row className="3xl:mt-[48px] items-center justify-start lg:mt-[31px] mt-[40px] w-[100%] xl:mt-[35px]">
                <Row className="items-center w-[45%]">
                  <div className="2xl:h-[17px] 3xl:h-[20px] bg-indigo_A700 h-[16px] lg:h-[13px] rounded-radius8 w-[9%] xl:h-[15px]"></div>
                  <div className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[31px] bg-blue_51 h-[16px] lg:h-[13px] lg:ml-[20px] ml-[26px] rounded-radius8 w-[9%] xl:h-[15px] xl:ml-[23px]"></div>
                  <div className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[31px] bg-blue_51 h-[16px] lg:h-[13px] lg:ml-[20px] ml-[26px] rounded-radius8 w-[9%] xl:h-[15px] xl:ml-[23px]"></div>
                  <div className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[31px] bg-blue_51 h-[16px] lg:h-[13px] lg:ml-[20px] ml-[26px] rounded-radius8 w-[9%] xl:h-[15px] xl:ml-[23px]"></div>
                  <div className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[31px] bg-blue_51 h-[16px] lg:h-[13px] lg:ml-[20px] ml-[26px] rounded-radius8 w-[9%] xl:h-[15px] xl:ml-[23px]"></div>
                </Row>
              </Row>
            </Column>
          </Row>
        </Column>
        <Stack className="2xl:h-[356px] 3xl:h-[427px] 3xl:mb-[40px] 3xl:ml-[10px] 3xl:mt-[249px] h-[355px] lg:h-[277px] lg:mb-[26px] lg:ml-[7px] lg:mt-[161px] mb-[34px] ml-[9px] mt-[208px] w-[28%] xl:h-[316px] xl:mb-[30px] xl:ml-[8px] xl:mt-[185px]">
          <div className="2xl:h-[185px] 3xl:bottom-[76px] 3xl:h-[221px] 3xl:left-[25px] absolute bg-orange_50 bottom-[64px] h-[184px] left-[21px] lg:bottom-[49px] lg:h-[144px] lg:left-[16px] rounded-radius92 w-[53%] xl:bottom-[56px] xl:h-[164px] xl:left-[18px]"></div>
          <Row className="absolute left-[0] w-[100%]">
            <Column className="3xl:mb-[100px] 3xl:mt-[69px] justify-start lg:mb-[65px] lg:mt-[45px] mb-[84px] mt-[58px] w-[29%] xl:mb-[74px] xl:mt-[51px]">
              <Image
                src="img_unsplashmez3po.png"
                className="2xl:h-[99px] 3xl:h-[118px] h-[98px] lg:h-[77px] rounded-radius50 w-[auto] xl:h-[88px]"
                alt="unsplashmEZ3Po"
              />
              <Image
                src="img_unsplashd1upki.png"
                className="2xl:h-[69px] 3xl:h-[82px] 3xl:mr-[12px] 3xl:mt-[56px] h-[68px] lg:h-[53px] lg:mr-[7px] lg:mt-[36px] mr-[10px] mt-[47px] rounded-radius50 w-[auto] xl:h-[61px] xl:mr-[8px] xl:mt-[41px]"
                alt="unsplashd1UPki"
              />
            </Column>
            <Column className="justify-start w-[72%]">
              <Row className="justify-end w-[100%]">
                <Column className="3xl:ml-[31px] justify-start lg:ml-[20px] ml-[26px] w-[48%] xl:ml-[23px]">
                  <Image
                    src="img_unsplash3tll9.png"
                    className="2xl:h-[69px] 3xl:h-[82px] 3xl:mx-[15px] h-[68px] lg:h-[53px] lg:mx-[10px] mx-[13px] rounded-radius50 w-[auto] xl:h-[61px] xl:mx-[11px]"
                    alt="unsplash3TLl9"
                  />
                  <Image
                    src="img_unsplasho3ymvt.png"
                    className="2xl:h-[121px] 3xl:h-[145px] 3xl:mt-[46px] h-[120px] lg:h-[94px] lg:mt-[30px] mt-[39px] rounded-radius50 w-[auto] xl:h-[107px] xl:mt-[34px]"
                    alt="unsplashO3ymvT"
                  />
                </Column>
                <Column className="3xl:mb-[27px] 3xl:ml-[6px] 3xl:mt-[75px] justify-start lg:mb-[17px] lg:ml-[3px] lg:mt-[49px] mb-[23px] ml-[5px] mt-[63px] w-[40%] xl:mb-[20px] xl:ml-[4px] xl:mt-[56px]">
                  <Image
                    src="img_unsplashet78q.png"
                    className="2xl:h-[55px] 3xl:h-[65px] 3xl:mr-[12px] h-[54px] lg:h-[42px] lg:mr-[7px] mr-[10px] rounded-radius50 w-[auto] xl:h-[49px] xl:mr-[8px]"
                    alt="unsplashet78Q"
                  />
                  <Image
                    src="img_unsplash6anudm.png"
                    className="2xl:h-[55px] 3xl:h-[65px] 3xl:ml-[12px] 3xl:mt-[39px] h-[54px] lg:h-[42px] lg:ml-[7px] lg:mt-[25px] ml-[10px] mt-[33px] rounded-radius50 w-[auto] xl:h-[49px] xl:ml-[8px] xl:mt-[29px]"
                    alt="unsplash6anudm"
                  />
                </Column>
              </Row>
              <Row className="justify-start w-[100%]">
                <Image
                  src="img_unsplashohkelo.png"
                  className="2xl:h-[99px] 3xl:h-[118px] 3xl:mt-[36px] h-[98px] lg:h-[77px] lg:mt-[23px] mt-[30px] rounded-radius50 w-[auto] xl:h-[88px] xl:mt-[26px]"
                  alt="unsplashOhKElO"
                />
                <Image
                  src="img_unsplashw7b3ed.png"
                  className="2xl:h-[69px] 3xl:h-[82px] 3xl:mb-[72px] 3xl:ml-[36px] 3xl:mr-[64px] h-[68px] lg:h-[53px] lg:mb-[46px] lg:ml-[23px] lg:mr-[42px] mb-[60px] ml-[30px] mr-[54px] rounded-radius50 w-[auto] xl:h-[61px] xl:mb-[53px] xl:ml-[26px] xl:mr-[48px]"
                  alt="unsplashW7b3eD"
                />
              </Row>
            </Column>
          </Row>
        </Stack>
      </Row>
      <Stack className="2xl:h-[388px] 3xl:h-[465px] 3xl:mt-[110px] h-[387px] lg:h-[301px] lg:mt-[71px] mt-[92px] mx-[auto] w-[89%] xl:h-[345px] xl:mt-[81px]">
        <Image
          src="img_group73.svg"
          className="2xl:h-[155px] 3xl:h-[185px] absolute h-[154px] lg:h-[120px] object-contain right-[0] top-[0] w-[14%] xl:h-[137px]"
          alt="Group73"
        />
        <div className="2xl:h-[179px] 3xl:h-[214px] absolute bg-orange_50 bottom-[0] h-[178px] left-[0] lg:h-[139px] rounded-bl-[0] rounded-br-[100px] rounded-tl-[0] rounded-tr-[0] w-[14%] xl:h-[159px]"></div>
        <Stack className="-translate-x-1/2 2xl:h-[293px] 3xl:bottom-[46px] 3xl:h-[351px] absolute bg-gray_53 bottom-[39px] font-alef h-[292px] left-[50%] lg:bottom-[30px] lg:h-[228px] rounded-radius75 w-[95%] xl:bottom-[34px] xl:h-[260px]">
          <Stack className="2xl:h-[293px] 3xl:h-[351px] absolute h-[292px] lg:h-[228px] right-[0] w-[93%] xl:h-[260px]">
            <Image
              src="img_rectangle31.svg"
              className="2xl:h-[293px] 3xl:h-[351px] absolute h-[292px] lg:h-[228px] object-contain right-[0] w-[50%] xl:h-[260px]"
              alt="Rectangle31"
            />
            <Row className="-translate-y-1/2 3xl:right-[117px] absolute bg-white_A700 border border-gray_100 border-solid items-center lg:right-[76px] right-[98px] rounded-radius60 shadow-bs1 top-[50%] w-[44%] xl:right-[87px]">
              <Text className="3xl:mb-[33px] 3xl:min-h-[26px] 3xl:ml-[40px] 3xl:mt-[36px] 3xl:text-fs19 align-top font-normal lg:mb-[21px] lg:min-h-[17px] lg:ml-[26px] lg:mt-[23px] lg:text-fs12 mb-[28px] min-h-[22px] ml-[34px] mt-[30px] text-fs16 text-gray_500 text-left xl:mb-[24px] xl:min-h-[19px] xl:ml-[30px] xl:mt-[26px] xl:text-fs14">
                {STRINGS["msg_enter_your_emai"] || ""}
              </Text>
              <Button className="3xl:mb-[9px] 3xl:ml-[67px] 3xl:mr-[16px] 3xl:mt-[12px] 3xl:px-[36px] 3xl:py-[24px] 3xl:text-fs19 align-middle bg-indigo_A700 border-bw font-normal lg:mb-[6px] lg:ml-[43px] lg:mr-[10px] lg:mt-[7px] lg:px-[23px] lg:py-[15px] lg:text-fs12 mb-[8px] ml-[56px] mr-[14px] mt-[10px] px-[30px] py-[20px] rounded-radius60 text-center text-fs16 text-white_A700 tracking-ls1 w-[39%] xl:mb-[7px] xl:ml-[49px] xl:mr-[12px] xl:mt-[8px] xl:px-[26px] xl:py-[17px] xl:text-fs14">
                {STRINGS["lbl_contact_now"] || ""}
              </Button>
            </Row>
            <Text className="3xl:bottom-[118px] 3xl:min-h-[34px] 3xl:text-fs21 absolute align-top bottom-[99px] font-normal left-[0] lg:bottom-[77px] lg:min-h-[22px] lg:text-fs14 min-h-[29px] text-fs18 text-gray_600 text-left xl:bottom-[88px] xl:min-h-[25px] xl:text-fs16">
              {STRINGS["msg_i_will_update_g"] || ""}
            </Text>
          </Stack>
          <Text className="3xl:left-[110px] 3xl:min-h-[64px] 3xl:text-fs48 3xl:top-[117px] absolute align-top font-normal left-[92px] lg:left-[71px] lg:min-h-[42px] lg:text-fs31 lg:top-[76px] min-h-[54px] text-black_900 text-fs40 text-left top-[98px] xl:left-[81px] xl:min-h-[48px] xl:text-fs35 xl:top-[87px]">
            {STRINGS["msg_subscribe_newsl"] || ""}
          </Text>
        </Stack>
      </Stack>
      <Column className="3xl:mb-[27px] 3xl:mt-[128px] font-alef items-center justify-start lg:mb-[17px] lg:mt-[83px] mb-[23px] mt-[107px] w-[100%] xl:mb-[20px] xl:mt-[95px]">
        <div className="2xl:h-[2px] 3xl:h-[2px] border border-gray_300 border-solid h-[1px] mx-[auto] w-[84%]"></div>
        <Row className="3xl:mt-[70px] items-center justify-start lg:mt-[45px] mt-[59px] w-[100%] xl:mt-[52px]">
          <Text className="3xl:min-h-[39px] 3xl:ml-[144px] 3xl:text-fs28 align-top font-normal lg:min-h-[25px] lg:ml-[93px] lg:text-fs18 min-h-[33px] ml-[120px] text-black_900 text-fs24 text-left xl:min-h-[29px] xl:ml-[106px] xl:text-fs21">
            <span className="text-black_900 text-fs24 align-top font-girassol text-left font-normal lg:text-fs18 xl:text-fs21 3xl:text-fs28">
              A+
            </span>
            <span className="text-black_900 text-fs24 align-top font-alef text-left font-normal lg:text-fs18 xl:text-fs21 3xl:text-fs28">
              {" "}
              Studio
            </span>
          </Text>
          <Text className="3xl:min-h-[32px] 3xl:ml-[431px] 3xl:text-fs24 align-top font-normal lg:min-h-[21px] lg:ml-[279px] lg:my-[2px] lg:text-fs15 min-h-[27px] ml-[359px] my-[3px] text-black_900 text-fs20 text-left xl:min-h-[24px] xl:ml-[319px] xl:my-[2px] xl:text-fs17">
            {STRINGS["lbl_what_we_do"] || ""}
          </Text>
          <Text className="3xl:min-h-[32px] 3xl:ml-[188px] 3xl:text-fs24 align-top font-normal lg:min-h-[21px] lg:ml-[122px] lg:my-[2px] lg:text-fs15 min-h-[27px] ml-[157px] my-[3px] text-black_900 text-fs20 text-left xl:min-h-[24px] xl:ml-[139px] xl:my-[2px] xl:text-fs17">
            {STRINGS["lbl_company"] || ""}
          </Text>
          <Text className="3xl:min-h-[32px] 3xl:ml-[154px] 3xl:text-fs24 align-top font-normal lg:min-h-[21px] lg:ml-[100px] lg:my-[2px] lg:text-fs15 min-h-[27px] ml-[129px] my-[3px] text-black_900 text-fs20 text-left xl:min-h-[24px] xl:ml-[114px] xl:my-[2px] xl:text-fs17">
            {STRINGS["lbl_support"] || ""}
          </Text>
          <Text className="3xl:min-h-[32px] 3xl:ml-[128px] 3xl:mr-[150px] 3xl:text-fs24 align-top font-normal lg:min-h-[21px] lg:ml-[83px] lg:mr-[97px] lg:my-[2px] lg:text-fs15 min-h-[27px] ml-[107px] mr-[125px] my-[3px] text-black_900 text-fs20 text-left xl:min-h-[24px] xl:ml-[95px] xl:mr-[111px] xl:my-[2px] xl:text-fs17">
            {STRINGS["lbl_contact"] || ""}
          </Text>
        </Row>
        <Row className="3xl:mt-[22px] justify-start lg:mt-[14px] mt-[19px] w-[100%] xl:mt-[16px]">
          <Text className="3xl:mb-[24px] 3xl:min-h-[105px] 3xl:ml-[144px] 3xl:text-fs16 align-top font-normal lg:mb-[15px] lg:min-h-[68px] lg:ml-[93px] lg:mt-[3px] lg:text-fs10 mb-[20px] min-h-[88px] ml-[120px] mt-[4px] text-fs14 text-gray_700 text-left w-[19%] xl:mb-[17px] xl:min-h-[78px] xl:ml-[106px] xl:mt-[3px] xl:text-fs12">
            {STRINGS["msg_leading_digital"] || ""}
          </Text>
          <Text className="3xl:min-h-[134px] 3xl:ml-[229px] 3xl:text-fs16 align-top font-normal lg:min-h-[87px] lg:ml-[148px] lg:text-fs10 min-h-[112px] ml-[191px] text-black_900 text-fs14 text-left w-[11%] xl:min-h-[99px] xl:ml-[169px] xl:text-fs12">
            {STRINGS["msg_web_design_app"] || ""}
          </Text>
          <Text className="3xl:mb-[33px] 3xl:min-h-[100px] 3xl:ml-[140px] 3xl:text-fs16 align-top font-normal lg:mb-[21px] lg:min-h-[65px] lg:ml-[91px] lg:text-fs10 mb-[28px] min-h-[84px] ml-[117px] text-black_900 text-fs14 text-left w-[8%] xl:mb-[24px] xl:min-h-[74px] xl:ml-[104px] xl:text-fs12">
            {STRINGS["msg_about_us_career"] || ""}
          </Text>
          <Text className="3xl:mb-[33px] 3xl:min-h-[100px] 3xl:ml-[127px] 3xl:text-fs16 align-top font-normal lg:mb-[21px] lg:min-h-[65px] lg:ml-[82px] lg:text-fs10 mb-[28px] min-h-[84px] ml-[106px] text-black_900 text-fs14 text-left w-[4%] xl:mb-[24px] xl:min-h-[74px] xl:ml-[94px] xl:text-fs12">
            {STRINGS["msg_faq_policy_busi"] || ""}
          </Text>
          <Text className="3xl:mb-[67px] 3xl:min-h-[67px] 3xl:ml-[148px] 3xl:mr-[152px] 3xl:text-fs16 align-top font-normal lg:mb-[43px] lg:min-h-[43px] lg:ml-[96px] lg:mr-[98px] lg:text-fs10 mb-[56px] min-h-[56px] ml-[124px] mr-[127px] text-black_900 text-fs14 text-left w-[5%] xl:mb-[49px] xl:min-h-[49px] xl:ml-[110px] xl:mr-[112px] xl:text-fs12">
            {STRINGS["msg_whatsapp_suppor"] || ""}
          </Text>
        </Row>
        <Row className="3xl:mt-[24px] items-center justify-start lg:mt-[15px] mt-[20px] w-[100%] xl:mt-[17px]">
          <Row className="items-center w-[10%]">
            <Image
              src="img_facebook.svg"
              className="2xl:h-[37px] 3xl:h-[44px] h-[36px] lg:h-[28px] object-contain w-[auto] xl:h-[33px]"
              alt="facebook"
            />
            <Image
              src="img_twitter.svg"
              className="2xl:h-[37px] 3xl:h-[44px] 3xl:ml-[19px] h-[36px] lg:h-[28px] lg:ml-[12px] ml-[16px] object-contain w-[auto] xl:h-[33px] xl:ml-[14px]"
              alt="twitter"
            />
            <Image
              src="img_linkedin.svg"
              className="2xl:h-[37px] 3xl:h-[44px] 3xl:ml-[19px] h-[36px] lg:h-[28px] lg:ml-[12px] ml-[16px] object-contain w-[auto] xl:h-[33px] xl:ml-[14px]"
              alt="linkedin"
            />
          </Row>
        </Row>
        <div className="2xl:h-[2px] 3xl:h-[2px] 3xl:mt-[34px] border border-gray_100 border-solid h-[1px] lg:mt-[22px] mt-[29px] mx-[auto] w-[84%] xl:mt-[25px]"></div>
        <div className="2xl:h-[2px] 3xl:h-[2px] border border-gray_100 border-solid h-[1px] mx-[auto] w-[84%]"></div>
        <Text className="3xl:min-h-[26px] 3xl:mt-[19px] 3xl:text-fs16 align-top font-normal lg:min-h-[17px] lg:mt-[12px] lg:text-fs10 min-h-[22px] mt-[16px] mx-[auto] text-fs14 text-gray_501 text-left xl:min-h-[19px] xl:mt-[14px] xl:text-fs12">
          {STRINGS["msg_copyright_202"] || ""}
        </Text>
      </Column>
    </Column>
  );
};

export default LandingPagePage;
