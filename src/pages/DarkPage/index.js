import React from "react";
import { STRINGS } from "../../constants/string";
import { Column } from "../../components/Column";
import { Stack } from "../../components/Stack";
import { Row } from "../../components/Row";
import { Image } from "../../components/Image";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { Line } from "../../components/Line";

const DarkPagePage = () => {
  return (
    <Column className="bg-gray_900 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="3xl:mb-[24px] items-end justify-start lg:mb-[15px] mb-[20px] w-[100%] xl:mb-[17px]">
        <Stack className="2xl:h-[698px] 3xl:h-[837px] h-[697px] lg:h-[543px] w-[100%] xl:h-[621px]">
          <Column className="absolute bg-gray_901 items-center justify-start left-[0] top-[0] w-[100%]">
            <header className="3xl:mb-[507px] 3xl:ml-[62px] 3xl:mr-[42px] 3xl:mt-[49px] lg:mb-[329px] lg:ml-[40px] lg:mr-[27px] lg:mt-[31px] mb-[423px] ml-[52px] mr-[35px] mt-[41px] w-[94%] xl:mb-[376px] xl:ml-[46px] xl:mr-[31px] xl:mt-[36px]">
              <Row className="justify-between px-[0] w-[100%]">
                <Image
                  src="img_giraffelogoma.png"
                  className="2xl:h-[182px] 3xl:h-[218px] 3xl:my-[7px] h-[181px] lg:h-[141px] lg:ml-[1px] lg:my-[4px] ml-[2px] my-[6px] w-[27%] xl:h-[162px] xl:ml-[1px] xl:my-[5px]"
                  alt="giraffelogoma"
                />
                <Row className="2xl:mb-[119px] 3xl:mb-[143px] font-aksarabaligalang items-center lg:mb-[92px] mb-[119.42px] mt-[1px] w-[52%] xl:mb-[106px]">
                  <Text className="2xl:mb-[4px] 3xl:mb-[5px] 3xl:min-h-[81px] 3xl:text-fs30 align-top font-normal leading-lh lg:mb-[3px] lg:min-h-[52px] lg:text-fs19 mb-[4.510002px] min-h-[68px] text-fs25 text-left text-white_A700 tracking-ls1 w-[11%] xl:mb-[4px] xl:min-h-[60px] xl:text-fs22">
                    {STRINGS["lbl_home"] || ""}
                  </Text>
                  <Text className="2xl:mb-[4px] 3xl:mb-[5px] 3xl:min-h-[81px] 3xl:ml-[72px] 3xl:text-fs30 align-top font-normal leading-lh lg:mb-[3px] lg:min-h-[52px] lg:ml-[46px] lg:text-fs19 mb-[4.510002px] min-h-[68px] ml-[60px] text-fs25 text-left text-white_A700 tracking-ls1 w-[22%] xl:mb-[4px] xl:min-h-[60px] xl:ml-[53px] xl:text-fs22">
                    {STRINGS["lbl_what_we_do"] || ""}
                  </Text>
                  <Text className="2xl:mb-[4px] 3xl:mb-[5px] 3xl:min-h-[81px] 3xl:ml-[72px] 3xl:text-fs30 align-top font-normal leading-lh lg:mb-[3px] lg:min-h-[52px] lg:ml-[46px] lg:text-fs19 mb-[4.510002px] min-h-[68px] ml-[60px] text-fs25 text-left text-white_A700 tracking-ls1 w-[13%] xl:mb-[4px] xl:min-h-[60px] xl:ml-[53px] xl:text-fs22">
                    {STRINGS["lbl_service"] || ""}
                  </Text>
                  <Text className="2xl:mb-[4px] 3xl:mb-[5px] 3xl:min-h-[81px] 3xl:ml-[72px] 3xl:text-fs30 align-top font-normal leading-lh lg:mb-[3px] lg:min-h-[52px] lg:ml-[46px] lg:text-fs19 mb-[4.510002px] min-h-[68px] ml-[60px] text-fs25 text-left text-white_A700 tracking-ls1 w-[8%] xl:mb-[4px] xl:min-h-[60px] xl:ml-[53px] xl:text-fs22">
                    {STRINGS["lbl_blog"] || ""}
                  </Text>
                  <Text className="2xl:mb-[4px] 2xl:mr-[7px] 3xl:mb-[5px] 3xl:min-h-[81px] 3xl:ml-[72px] 3xl:mr-[9px] 3xl:text-fs30 align-top font-normal leading-lh lg:mb-[3px] lg:min-h-[52px] lg:ml-[46px] lg:mr-[6px] lg:text-fs19 mb-[4.510002px] min-h-[68px] ml-[60px] mr-[7.7700195px] text-fs25 text-left text-white_A700 tracking-ls1 w-[14%] xl:mb-[4px] xl:min-h-[60px] xl:ml-[53px] xl:mr-[6px] xl:text-fs22">
                    {STRINGS["lbl_contact"] || ""}
                  </Text>
                </Row>
              </Row>
            </header>
          </Column>
          <Row className="absolute bottom-[0] items-end right-[0] w-[95%]">
            <Stack className="2xl:h-[412px] 3xl:h-[494px] 3xl:mt-[102px] h-[411px] lg:h-[320px] lg:mt-[66px] mb-[1px] mt-[85px] w-[37%] xl:h-[366px] xl:mt-[75px]">
              <Image
                src="img_dotornament_1.svg"
                className="2xl:h-[179px] 3xl:h-[214px] absolute bottom-[0] h-[178px] left-[1px] lg:h-[139px] object-contain w-[81%] xl:h-[159px]"
                alt="DotOrnament"
              />
              <Column className="absolute font-alef justify-start left-[0] top-[0] w-[100%]">
                <Text className="3xl:min-h-[64px] 3xl:ml-[6px] 3xl:mr-[12px] 3xl:text-fs48 align-top font-normal lg:min-h-[42px] lg:ml-[3px] lg:mr-[7px] lg:text-fs31 min-h-[54px] ml-[5px] mr-[10px] text-fs40 text-left text-white_A700 xl:min-h-[48px] xl:ml-[4px] xl:mr-[8px] xl:text-fs35">
                  {STRINGS["msg_a_digital_produ"] || ""}
                </Text>
                <Text className="3xl:min-h-[108px] 3xl:mt-[25px] 3xl:text-fs22 align-top font-normal lg:min-h-[70px] lg:mt-[16px] lg:text-fs14 min-h-[90px] mt-[21px] text-fs19 text-left text-white_A700 w-[100%] xl:min-h-[80px] xl:mt-[18px] xl:text-fs16">
                  {STRINGS["msg_leading_digital"] || ""}
                </Text>
                <Button className="3xl:mt-[102px] 3xl:mx-[117px] 3xl:px-[36px] 3xl:py-[24px] 3xl:text-fs24 align-middle bg-blue_600 border-bw font-normal lg:mt-[66px] lg:mx-[76px] lg:px-[23px] lg:py-[15px] lg:text-fs15 mt-[85px] mx-[98px] px-[30px] py-[20px] rounded-radius60 text-center text-fs20 text-white_A700 tracking-ls1 w-[42%] xl:mt-[75px] xl:mx-[87px] xl:px-[26px] xl:py-[17px] xl:text-fs17">
                  {STRINGS["lbl_contact_now"] || ""}
                </Button>
              </Column>
            </Stack>
            <Stack className="2xl:h-[498px] 3xl:h-[597px] 3xl:ml-[64px] h-[497px] lg:h-[387px] lg:ml-[42px] ml-[54px] w-[60%] xl:h-[443px] xl:ml-[48px]">
              <div className="2xl:h-[179px] 3xl:h-[214px] 3xl:right-[158px] absolute bg-red_900 bottom-[0] h-[178px] lg:h-[139px] lg:right-[102px] right-[132px] rounded-bl-[0] rounded-br-[100px] rounded-tl-[0] rounded-tr-[0] w-[23%] xl:h-[159px] xl:right-[117px]"></div>
              <div className="2xl:h-[147px] 3xl:h-[176px] 3xl:top-[16px] absolute bg-blue_100_5b border border-black_900_5b border-solid h-[146px] left-[0] lg:h-[114px] lg:top-[10px] rounded-radius73 top-[14px] w-[19%] xl:h-[130px] xl:top-[12px]"></div>
              <Image
                src="img_image8_1.png"
                className="2xl:h-[360px] 3xl:h-[432px] absolute h-[359px] lg:h-[280px] right-[0] top-[0] w-[92%] xl:h-[320px]"
                alt="image8"
              />
            </Stack>
          </Row>
        </Stack>
        <Stack className="2xl:h-[877px] 3xl:h-[1052px] 3xl:ml-[12px] 3xl:mt-[72px] h-[876px] lg:h-[682px] lg:ml-[7px] lg:mt-[46px] ml-[10px] mt-[60px] w-[94%] xl:h-[780px] xl:ml-[8px] xl:mt-[53px]">
          <Stack className="2xl:h-[877px] 3xl:h-[1052px] absolute h-[876px] left-[0] lg:h-[682px] w-[100%] xl:h-[780px]">
            <Image
              src="img_rectangle32.svg"
              className="2xl:h-[173px] 3xl:h-[207px] 3xl:left-[164px] absolute bottom-[0] h-[172px] left-[137px] lg:h-[134px] lg:left-[106px] object-contain w-[24%] xl:h-[154px] xl:left-[121px]"
              alt="Rectangle32"
            />
            <Stack className="2xl:h-[877px] 3xl:h-[1052px] absolute font-alef h-[876px] left-[0] lg:h-[682px] w-[100%] xl:h-[780px]">
              <div className="2xl:h-[166px] 3xl:h-[199px] 3xl:right-[158px] absolute border-bw88 border-red_400 border-solid bottom-[0] h-[165px] lg:h-[129px] lg:right-[102px] right-[132px] rounded-radius825 w-[13%] xl:h-[147px] xl:right-[117px]"></div>
              <div className="-translate-y-1/2 2xl:h-[620px] 3xl:h-[744px] absolute bg-amber_400 h-[619px] lg:h-[482px] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[150px] rounded-tr-[0] top-[50%] w-[77%] xl:h-[551px]"></div>
              <div className="2xl:h-[179px] 3xl:h-[214px] 3xl:top-[360px] absolute bg-amber_400 h-[178px] left-[0] lg:h-[139px] lg:top-[233px] rounded-bl-[0] rounded-br-[100px] rounded-tl-[0] rounded-tr-[0] top-[300px] w-[14%] xl:h-[159px] xl:top-[266px]"></div>
              <Row className="absolute left-[0] top-[0] w-[88%]">
                <Text className="3xl:mb-[157px] 3xl:min-h-[166px] 3xl:mt-[130px] 3xl:text-fs48 align-top font-normal leading-lh lg:mb-[101px] lg:min-h-[108px] lg:mt-[84px] lg:text-fs31 mb-[131px] min-h-[139px] mt-[109px] text-fs40 text-left text-white_A700 w-[33%] xl:mb-[116px] xl:min-h-[123px] xl:mt-[96px] xl:text-fs35">
                  {STRINGS["msg_how_can_we_help"] || ""}
                </Text>
                <Column className="3xl:ml-[578px] bg-white_A700 border border-gray_100 border-solid font-alef items-center justify-center lg:ml-[374px] ml-[482px] rounded-radius40 shadow-bs w-[27%] xl:ml-[428px]">
                  <Stack className="2xl:h-[128px] 3xl:h-[153px] 3xl:mt-[50px] h-[127px] lg:h-[99px] lg:mt-[32px] mt-[42px] mx-[auto] w-[75%] xl:h-[113px] xl:mt-[37px]">
                    <Image
                      src="img_rectangle35.svg"
                      className="2xl:h-[117px] 3xl:h-[140px] absolute h-[116px] left-[0] lg:h-[91px] object-cover top-[0] w-[100%] xl:h-[104px]"
                      alt="Rectangle35"
                    />
                    <Image
                      src="img_cartonboxlot.png"
                      className="-translate-x-1/2 2xl:h-[121px] 3xl:h-[145px] absolute bottom-[0] h-[120px] left-[50%] lg:h-[94px] w-[65%] xl:h-[107px]"
                      alt="cartonboxlot"
                    />
                  </Stack>
                  <Text className="3xl:min-h-[79px] 3xl:mt-[22px] 3xl:text-fs28 align-middle font-normal leading-lh lg:min-h-[51px] lg:mt-[14px] lg:text-fs18 min-h-[66px] mt-[19px] mx-[auto] text-black_900 text-center text-fs24 w-[65%] xl:min-h-[58px] xl:mt-[16px] xl:text-fs21">
                    {STRINGS["msg_financial_plann"] || ""}
                  </Text>
                  <Text className="3xl:mb-[27px] 3xl:min-h-[97px] 3xl:mt-[25px] 3xl:text-fs22 align-middle font-normal lg:mb-[17px] lg:min-h-[63px] lg:mt-[16px] lg:text-fs14 mb-[23px] min-h-[81px] mt-[21px] mx-[auto] text-center text-fs19 text-gray_600 w-[80%] xl:mb-[20px] xl:min-h-[72px] xl:mt-[18px] xl:text-fs16">
                    {STRINGS["msg_protocols_apart"] || ""}
                  </Text>
                </Column>
              </Row>
              <Text className="3xl:bottom-[343px] 3xl:left-[45px] 3xl:min-h-[122px] 3xl:text-fs25 absolute align-top bottom-[286px] font-normal left-[38px] lg:bottom-[222px] lg:left-[29px] lg:min-h-[79px] lg:text-fs16 min-h-[102px] text-fs21 text-left text-white_A700 w-[30%] xl:bottom-[254px] xl:left-[33px] xl:min-h-[90px] xl:text-fs18">
                {STRINGS["msg_we_build_readym"] || ""}
              </Text>
              <Column className="3xl:bottom-[105px] 3xl:right-[206px] absolute bg-white_A700 border border-gray_100 border-solid bottom-[88px] items-center justify-start lg:bottom-[68px] lg:right-[133px] right-[172px] rounded-radius40 shadow-bs w-[23%] xl:bottom-[78px] xl:right-[153px]">
                <Stack className="2xl:h-[152px] 3xl:h-[182px] 3xl:mt-[22px] h-[151px] lg:h-[118px] lg:mt-[14px] mt-[19px] mx-[auto] w-[75%] xl:h-[135px] xl:mt-[16px]">
                  <div className="2xl:h-[117px] 3xl:bottom-[16px] 3xl:h-[140px] absolute bg-lime_50 bottom-[14px] h-[116px] left-[0] lg:bottom-[10px] lg:h-[91px] rounded-radius20 w-[100%] xl:bottom-[12px] xl:h-[104px]"></div>
                  <Image
                    src="img_guy1.png"
                    className="2xl:h-[152px] 3xl:h-[182px] 3xl:left-[32px] absolute h-[151px] left-[27px] lg:h-[118px] lg:left-[21px] w-[72%] xl:h-[135px] xl:left-[24px]"
                    alt="guy1"
                  />
                </Stack>
                <Column className="3xl:mb-[24px] 3xl:mt-[25px] font-alef items-center justify-start lg:mb-[15px] lg:mt-[16px] mb-[20px] mt-[21px] w-[100%] xl:mb-[17px] xl:mt-[18px]">
                  <Text className="3xl:min-h-[79px] 3xl:text-fs28 align-middle font-normal leading-lh lg:min-h-[51px] lg:text-fs18 min-h-[66px] mx-[auto] text-black_900 text-center text-fs24 w-[75%] xl:min-h-[58px] xl:text-fs21">
                    {STRINGS["msg_market_analysis"] || ""}
                  </Text>
                  <Text className="3xl:min-h-[97px] 3xl:mt-[25px] 3xl:text-fs22 align-middle font-normal lg:min-h-[63px] lg:mt-[16px] lg:text-fs14 min-h-[81px] mt-[21px] mx-[auto] text-center text-fs19 text-gray_600 w-[80%] xl:min-h-[72px] xl:mt-[18px] xl:text-fs16">
                    {STRINGS["msg_protocols_apart"] || ""}
                  </Text>
                </Column>
              </Column>
              <Column className="-translate-x-1/2 3xl:bottom-[10px] absolute bg-white_A700 border border-gray_100 border-solid bottom-[9px] font-alef items-center justify-start left-[50%] lg:bottom-[7px] rounded-radius40 shadow-bs w-[23%] xl:bottom-[8px]">
                <Stack className="2xl:h-[258px] 3xl:h-[309px] h-[257px] lg:h-[200px] mx-[auto] w-[78%] xl:h-[229px]">
                  <Image
                    src="img_rectangle34.svg"
                    className="-translate-x-1/2 2xl:h-[117px] 3xl:h-[140px] 3xl:top-[45px] absolute h-[116px] left-[50%] lg:h-[91px] lg:top-[29px] object-contain top-[38px] w-[96%] xl:h-[104px] xl:top-[33px]"
                    alt="Rectangle34"
                  />
                  <Image
                    src="img_92ca9282364f4.png"
                    className="2xl:h-[225px] 3xl:h-[269px] absolute h-[224px] lg:h-[175px] right-[0] top-[0] w-[95%] xl:h-[200px]"
                    alt="92CA9282364F4"
                  />
                  <Text className="-translate-x-1/2 3xl:min-h-[79px] 3xl:text-fs28 absolute align-middle bottom-[0] font-normal leading-lh left-[50%] lg:min-h-[51px] lg:text-fs18 min-h-[66px] text-black_900 text-center text-fs24 w-[100%] xl:min-h-[58px] xl:text-fs21">
                    {STRINGS["msg_development_web"] || ""}
                  </Text>
                </Stack>
                <Text className="3xl:mb-[24px] 3xl:min-h-[97px] 3xl:mt-[25px] 3xl:text-fs22 align-middle font-normal lg:mb-[15px] lg:min-h-[63px] lg:mt-[16px] lg:text-fs14 mb-[20px] min-h-[81px] mt-[21px] mx-[auto] text-center text-fs19 text-gray_600 w-[80%] xl:mb-[17px] xl:min-h-[72px] xl:mt-[18px] xl:text-fs16">
                  {STRINGS["msg_communication_p"] || ""}
                </Text>
              </Column>
            </Stack>
          </Stack>
          <Column className="-translate-y-1/2 3xl:left-[51px] absolute items-end justify-start left-[43px] lg:left-[33px] top-[50%] w-[59%] xl:left-[38px]">
            <Column className="3xl:ml-[12px] bg-white_A700 border border-gray_100 border-solid font-alef items-center justify-center lg:ml-[7px] ml-[10px] rounded-radius40 shadow-bs w-[39%] xl:ml-[8px]">
              <Stack className="2xl:h-[122px] 3xl:h-[146px] 3xl:mt-[46px] bg-gray_50 h-[121px] lg:h-[95px] lg:mt-[30px] mt-[39px] mx-[auto] rounded-radius20 w-[40%] xl:h-[108px] xl:mt-[34px]">
                <Image
                  src="img_boxsearch1_1.svg"
                  className="2xl:h-[75px] 3xl:bottom-[27px] 3xl:h-[89px] 3xl:left-[28px] 3xl:right-[27px] 3xl:top-[28px] absolute bottom-[23px] h-[74px] left-[24px] lg:bottom-[17px] lg:h-[58px] lg:left-[18px] lg:right-[17px] lg:top-[18px] object-contain right-[23px] top-[24px] w-[auto] xl:bottom-[20px] xl:h-[66px] xl:left-[21px] xl:right-[20px] xl:top-[21px]"
                  alt="boxsearch1"
                />
              </Stack>
              <Text className="3xl:min-h-[79px] 3xl:mt-[37px] 3xl:text-fs28 align-middle font-normal leading-lh lg:min-h-[51px] lg:mt-[24px] lg:text-fs18 min-h-[66px] mt-[31px] mx-[auto] text-black_900 text-center text-fs24 w-[55%] xl:min-h-[58px] xl:mt-[27px] xl:text-fs21">
                {STRINGS["msg_business_idea_p"] || ""}
              </Text>
              <Text className="3xl:mb-[24px] 3xl:min-h-[97px] 3xl:mt-[25px] 3xl:text-fs22 align-middle font-normal lg:mb-[15px] lg:min-h-[63px] lg:mt-[16px] lg:text-fs14 mb-[20px] min-h-[81px] mt-[21px] mx-[auto] text-center text-fs19 text-gray_600 w-[80%] xl:mb-[17px] xl:min-h-[72px] xl:mt-[18px] xl:text-fs16">
                {STRINGS["msg_we_present_you"] || ""}
              </Text>
            </Column>
            <Column className="3xl:mt-[28px] justify-start lg:mt-[18px] mt-[24px] w-[100%] xl:mt-[21px]">
              <div className="2xl:h-[78px] 3xl:h-[93px] 3xl:mx-[268px] bg-gray_902 h-[77px] lg:h-[60px] lg:mx-[174px] mx-[224px] rounded-bl-[0] rounded-br-[100px] rounded-tl-[0] rounded-tr-[0] w-[19%] xl:h-[69px] xl:mx-[199px]"></div>
              <Image
                src="img_group70.svg"
                className="2xl:h-[155px] 3xl:h-[185px] 3xl:mr-[12px] 3xl:mt-[102px] h-[154px] lg:h-[120px] lg:mr-[7px] lg:mt-[66px] mr-[10px] mt-[85px] object-contain w-[52%] xl:h-[137px] xl:mr-[8px] xl:mt-[75px]"
                alt="Group70"
              />
            </Column>
          </Column>
        </Stack>
        <Stack className="2xl:h-[1361px] 3xl:h-[1633px] 3xl:ml-[12px] 3xl:mt-[45px] font-aksarabaligalang h-[1360px] lg:h-[1058px] lg:ml-[7px] lg:mt-[29px] ml-[10px] mt-[38px] w-[92%] xl:h-[1210px] xl:ml-[8px] xl:mt-[33px]">
          <Row className="3xl:top-[165px] absolute left-[0] lg:top-[107px] top-[138px] w-[93%] xl:top-[122px]">
            <Stack className="2xl:h-[437px] 3xl:h-[524px] 3xl:mb-[74px] h-[436px] lg:h-[340px] lg:mb-[48px] mb-[62px] w-[49%] xl:h-[388px] xl:mb-[55px]">
              <Stack className="2xl:h-[437px] 3xl:h-[524px] absolute h-[436px] left-[0] lg:h-[340px] w-[100%] xl:h-[388px]">
                <div className="2xl:h-[130px] 3xl:h-[155px] absolute bg-orange_50 bottom-[0] h-[129px] lg:h-[101px] right-[0] rounded-radius645 w-[22%] xl:h-[115px]"></div>
                <Image
                  src="img_unsplashbzqu01.png"
                  className="2xl:h-[373px] 3xl:h-[447px] absolute h-[372px] left-[0] lg:h-[290px] top-[0] w-[94%] xl:h-[331px]"
                  alt="unsplashbzqU01"
                />
              </Stack>
              <Image
                src="img_playroundedbu_1.svg"
                className="2xl:h-[79px] 3xl:h-[94px] 3xl:left-[283px] 3xl:top-[168px] absolute h-[78px] left-[236px] lg:h-[61px] lg:left-[183px] lg:top-[108px] object-contain top-[140px] w-[auto] xl:h-[70px] xl:left-[209px] xl:top-[124px]"
                alt="playroundedbu"
              />
            </Stack>
            <Stack className="2xl:h-[441px] 3xl:h-[529px] 3xl:ml-[46px] 3xl:mt-[69px] font-alef h-[440px] lg:h-[343px] lg:ml-[30px] lg:mt-[45px] ml-[39px] mt-[58px] w-[48%] xl:h-[392px] xl:ml-[34px] xl:mt-[51px]">
              <div className="2xl:h-[179px] 3xl:h-[214px] absolute bg-gray_101 h-[178px] left-[0] lg:h-[139px] rounded-bl-[0] rounded-br-[100px] rounded-tl-[0] rounded-tr-[0] top-[0] w-[31%] xl:h-[159px]"></div>
              <Text className="3xl:min-h-[361px] 3xl:text-fs25 absolute align-top bottom-[0] font-normal lg:min-h-[234px] lg:text-fs16 min-h-[301px] right-[0] text-fs21 text-left text-white_A700 tracking-ls1 w-[92%] xl:min-h-[267px] xl:text-fs18">
                <span className="text-black_900 text-fs21 align-top tracking-ls1 font-alef text-left font-normal lg:text-fs16 xl:text-fs18 3xl:text-fs25">
                  Our Busi
                </span>
                <span className="text-white_A700 text-fs21 align-top tracking-ls1 font-alef text-left font-normal lg:text-fs16 xl:text-fs18 3xl:text-fs25">
                  ness Plan is a written document describing a company's core
                  business activites, Objectives, and how it plans to achieve
                  its goals. Our goal is to provide our client high quality
                  Product with modern idea accordingly their budgets and
                  according thir reuirements.
                </span>
              </Text>
              <Text className="3xl:left-[68px] 3xl:min-h-[116px] 3xl:text-fs42 3xl:top-[28px] absolute align-top font-normal leading-lh left-[57px] lg:left-[44px] lg:min-h-[75px] lg:text-fs27 lg:top-[18px] min-h-[97px] text-black_900 text-fs35 text-left top-[24px] w-[70%] xl:left-[50px] xl:min-h-[86px] xl:text-fs31 xl:top-[21px]">
                <span className="text-black_900 text-fs35 align-top font-alef text-left font-normal lg:text-fs27 xl:text-fs31 3xl:text-fs42">
                  Great D
                </span>
                <span className="text-white_A700 text-fs35 align-top font-alef text-left font-normal lg:text-fs27 xl:text-fs31 3xl:text-fs42">
                  igital Product{" "}
                </span>
                <span className="text-black_900 text-fs35 align-top font-alef text-left font-normal lg:text-fs27 xl:text-fs31 3xl:text-fs42">
                  Agency{" "}
                </span>
                <span className="text-white_A700 text-fs35 align-top font-alef text-left font-normal lg:text-fs27 xl:text-fs31 3xl:text-fs42">
                  since 2016{" "}
                </span>
              </Text>
            </Stack>
          </Row>
          <Column className="3xl:left-[99px] absolute bottom-[0] items-center justify-start left-[83px] lg:left-[64px] w-[81%] xl:left-[73px]">
            <Text className="2xl:min-h-[61px] 2xl:ml-[228px] 2xl:mr-[326px] 3xl:min-h-[74px] 3xl:ml-[274px] 3xl:mr-[391px] 3xl:text-fs44 align-middle font-aksarabaligalang font-normal lg:min-h-[48px] lg:ml-[177px] lg:mr-[253px] lg:text-fs28 min-h-[61.88px] ml-[228.5px] mr-[326.40002px] text-bluegray_500 text-center text-fs37 xl:min-h-[55px] xl:ml-[203px] xl:mr-[290px] xl:text-fs32">
              {STRINGS["msg_what_are_our_pr"] || ""}
            </Text>
            <Text className="2xl:min-h-[33px] 2xl:ml-[169px] 2xl:mr-[264px] 2xl:mt-[13px] 3xl:min-h-[39px] 3xl:ml-[202px] 3xl:mr-[317px] 3xl:mt-[16px] 3xl:text-fs22 align-middle font-alef font-normal lg:min-h-[25px] lg:ml-[131px] lg:mr-[205px] lg:mt-[10px] lg:text-fs14 min-h-[33.23px] ml-[168.94px] mr-[264.71997px] mt-[13.75px] text-center text-fs19 text-gray_400 xl:min-h-[29px] xl:ml-[150px] xl:mr-[235px] xl:mt-[12px] xl:text-fs16">
              {STRINGS["msg_several_selecte"] || ""}
            </Text>
            <Stack className="2xl:h-[614px] 2xl:mt-[8px] 3xl:h-[736px] 3xl:mt-[9px] h-[612.91px] lg:h-[477px] lg:mt-[6px] mt-[8.230225px] w-[100%] xl:h-[546px] xl:mt-[7px]">
              <Image
                src="img_dot_1.svg"
                className="2xl:h-[118px] 2xl:left-[99px] 3xl:h-[142px] 3xl:left-[119px] absolute h-[117.89px] left-[99.92px] lg:h-[92px] lg:left-[77px] object-contain top-[0] w-[11%] xl:h-[105px] xl:left-[88px]"
                alt="Dot"
              />
              <Image
                src="img_ellipse94.svg"
                className="2xl:h-[159px] 3xl:h-[190px] absolute bottom-[0] h-[158px] left-[0] lg:h-[123px] object-contain w-[15%] xl:h-[141px]"
                alt="Ellipse94"
              />
              <div className="2xl:h-[130px] 2xl:top-[119px] 3xl:h-[155px] 3xl:top-[143px] absolute bg-orange_50 h-[129px] lg:h-[101px] lg:top-[93px] right-[0] rounded-radius645 top-[119.91px] w-[13%] xl:h-[115px] xl:top-[106px]"></div>
              <Stack className="-translate-x-1/2 2xl:h-[494px] 3xl:bottom-[44px] 3xl:h-[592px] absolute bottom-[37px] h-[493px] left-[50%] lg:bottom-[28px] lg:h-[384px] w-[92%] xl:bottom-[32px] xl:h-[439px]">
                <Stack className="2xl:h-[494px] 3xl:h-[592px] absolute h-[493px] left-[0] lg:h-[384px] w-[100%] xl:h-[439px]">
                  <Image
                    src="img_rectangle18.svg"
                    className="2xl:h-[494px] 3xl:h-[592px] absolute bottom-[0] h-[493px] left-[0] lg:h-[384px] object-contain right-[1px] top-[0] w-[100%] xl:h-[439px]"
                    alt="Rectangle18"
                  />
                  <Stack className="2xl:h-[494px] 3xl:h-[592px] absolute h-[493px] left-[0] lg:h-[384px] w-[100%] xl:h-[439px]">
                    <Image
                      src="img_rectangle19.svg"
                      className="2xl:h-[86px] 3xl:h-[104px] absolute h-[85.87px] left-[0] lg:h-[67px] object-cover top-[0] w-[100%] xl:h-[77px]"
                      alt="Rectangle19"
                    />
                    <Row className="2xl:right-[199px] 3xl:right-[239px] absolute lg:right-[155px] right-[199.37px] w-[27%] xl:right-[177px]">
                      <Stack className="2xl:h-[494px] 3xl:h-[592px] h-[493px] lg:h-[384px] w-[1%] xl:h-[439px]">
                        <Line className="2xl:h-[494px] 3xl:h-[592px] absolute bg-gray_601 bottom-[0] h-[493px] left-[0] lg:h-[384px] right-[0] top-[0] w-[0.37px] xl:h-[439px]" />
                        <Line className="-translate-x-1/2 2xl:h-[62px] 3xl:h-[74px] absolute bg-black_900 h-[61.14px] left-[50%] lg:h-[48px] top-[0] w-[0.37px] xl:h-[55px]" />
                      </Stack>
                      <Line className="2xl:h-[494px] 2xl:ml-[258px] 3xl:h-[592px] 3xl:ml-[310px] bg-orange_A200 h-[493px] lg:h-[384px] lg:ml-[201px] ml-[258.52997px] w-[1px] xl:h-[439px] xl:ml-[229px]" />
                      <Line className="2xl:h-[62px] 2xl:mb-[432px] 3xl:h-[74px] 3xl:mb-[518px] bg-black_900 h-[61.14px] lg:h-[48px] lg:mb-[335px] mb-[431.8601px] ml-[1px] w-[0.37px] xl:h-[55px] xl:mb-[384px]" />
                    </Row>
                  </Stack>
                </Stack>
                <Column className="-translate-x-1/2 2xl:top-[23px] 3xl:top-[28px] absolute justify-start left-[50%] lg:top-[18px] top-[23.38px] w-[90%] xl:top-[20px]">
                  <Row className="font-poppins justify-end w-[100%]">
                    <Text className="2xl:min-h-[39px] 2xl:ml-[28px] 3xl:min-h-[47px] 3xl:ml-[34px] 3xl:text-fs30 align-top font-medium lg:min-h-[30px] lg:ml-[22px] lg:text-fs19 min-h-[39.62px] ml-[28.419983px] text-black_900 text-fs25 text-left xl:min-h-[35px] xl:ml-[25px] xl:text-fs22">
                      {STRINGS["lbl_service"] || ""}
                    </Text>
                    <Text className="2xl:min-h-[34px] 2xl:ml-[354px] 2xl:mt-[3px] 3xl:min-h-[41px] 3xl:ml-[425px] 3xl:mt-[4px] 3xl:text-fs30 align-top font-medium lg:min-h-[26px] lg:ml-[275px] lg:mt-[3px] lg:text-fs19 mb-[1px] min-h-[34.19px] ml-[354.31px] mt-[3.9902344px] text-black_900 text-fs25 text-left xl:min-h-[30px] xl:ml-[315px] xl:mt-[3px] xl:text-fs22">
                      {STRINGS["lbl_pricing"] || ""}
                    </Text>
                    <Text className="2xl:mb-[1px] 2xl:min-h-[35px] 2xl:ml-[108px] 2xl:mr-[7px] 2xl:mt-[2px] 3xl:min-h-[43px] 3xl:ml-[130px] 3xl:mr-[9px] 3xl:my-[2px] 3xl:text-fs30 align-top font-medium lg:min-h-[27px] lg:ml-[84px] lg:mr-[6px] lg:my-[1px] lg:text-fs19 mb-[1.7102051px] min-h-[35.9px] ml-[108.45996px] mr-[7.880005px] mt-[2.0100098px] text-black_900 text-fs25 text-left xl:min-h-[31px] xl:ml-[96px] xl:mr-[7px] xl:my-[1px] xl:text-fs22">
                      {STRINGS["lbl_amnt"] || ""}
                    </Text>
                  </Row>
                  <Row className="2xl:mt-[47px] 3xl:mt-[57px] justify-between lg:mt-[37px] mt-[47.82007px] mx-[auto] px-[0] w-[100%] xl:mt-[42px]">
                    <Column className="2xl:mb-[7px] 3xl:mb-[8px] font-poppins justify-start lg:mb-[5px] mb-[7.080078px] ml-[1px] w-[57%] xl:mb-[6px]">
                      <Text className="2xl:min-h-[33px] 3xl:min-h-[40px] 3xl:text-fs27 align-top font-medium lg:min-h-[26px] lg:text-fs17 min-h-[33.49px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:text-fs20">
                        {STRINGS["lbl_teaser"] || ""}
                      </Text>
                      <Text className="2xl:min-h-[33px] 2xl:mt-[7px] 2xl:mx-[35px] 3xl:min-h-[40px] 3xl:mt-[9px] 3xl:mx-[42px] 3xl:text-fs27 align-top font-normal lg:min-h-[26px] lg:mt-[5px] lg:mx-[27px] lg:text-fs17 min-h-[33.49px] ml-[35.150024px] mr-[35.15px] mt-[7.550049px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:mt-[6px] xl:mx-[31px] xl:text-fs20">
                        {STRINGS["lbl_prize_list"] || ""}
                      </Text>
                      <Text className="2xl:min-h-[33px] 2xl:mt-[3px] 2xl:mx-[38px] 3xl:min-h-[40px] 3xl:mt-[4px] 3xl:mx-[45px] 3xl:text-fs27 align-top font-normal lg:min-h-[26px] lg:mt-[2px] lg:mx-[29px] lg:text-fs17 min-h-[33.49px] ml-[38.070007px] mr-[38.07px] mt-[3.5100098px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:mt-[3px] xl:mx-[33px] xl:text-fs20">
                        {STRINGS["lbl_question"] || ""}
                      </Text>
                    </Column>
                    <Column className="2xl:mt-[29px] 3xl:mt-[35px] justify-start lg:mt-[22px] mb-[1px] mt-[29.22998px] w-[42%] xl:mt-[26px]">
                      <Row className="font-sora items-center justify-between px-[0] w-[100%]">
                        <Text className="2xl:min-h-[33px] 3xl:min-h-[40px] 3xl:text-fs27 align-top font-normal lg:min-h-[26px] lg:text-fs17 mb-[1px] min-h-[33.49px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:text-fs20">
                          {STRINGS["lbl_700"] || ""}
                        </Text>
                        <Text className="2xl:min-h-[33px] 3xl:min-h-[40px] 3xl:text-fs27 align-top font-semibold lg:min-h-[26px] lg:text-fs17 min-h-[33.49px] my-[1px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:text-fs20">
                          {STRINGS["lbl_x_1"] || ""}
                        </Text>
                      </Row>
                      <Row className="2xl:mt-[3px] 3xl:mt-[3px] font-sora justify-between lg:mt-[2px] mt-[3.2998047px] px-[0] w-[100%] xl:mt-[2px]">
                        <Text className="2xl:mb-[18px] 2xl:min-h-[33px] 3xl:mb-[22px] 3xl:min-h-[40px] 3xl:text-fs27 align-top font-normal lg:mb-[14px] lg:min-h-[26px] lg:text-fs17 mb-[18.5px] min-h-[33.49px] text-fs23 text-left text-orange_A200 xl:mb-[16px] xl:min-h-[29px] xl:text-fs20">
                          {STRINGS["lbl_700"] || ""}
                        </Text>
                        <Text className="2xl:min-h-[33px] 2xl:mt-[18px] 3xl:min-h-[40px] 3xl:mt-[22px] 3xl:text-fs27 align-top font-semibold lg:min-h-[26px] lg:mt-[14px] lg:text-fs17 min-h-[33.49px] mt-[18.5px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:mt-[16px] xl:text-fs20">
                          {STRINGS["lbl_x_6"] || ""}
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Row className="2xl:mt-[11px] 3xl:mt-[13px] justify-between lg:mt-[8px] mt-[11.529785px] px-[0] w-[100%] xl:mt-[10px]">
                    <Column className="justify-start w-[81%]">
                      <Row className="font-poppins items-center justify-between px-[0] w-[100%]">
                        <Text className="2xl:min-h-[32px] 3xl:min-h-[39px] 3xl:text-fs27 align-top font-medium font-poppins lg:min-h-[25px] lg:text-fs17 min-h-[32.96px] mt-[1px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:text-fs20">
                          {STRINGS["lbl_promotion"] || ""}
                        </Text>
                        <Text className="2xl:min-h-[33px] 3xl:min-h-[40px] 3xl:text-fs27 align-top font-normal font-sora lg:min-h-[26px] lg:text-fs17 mb-[1px] min-h-[33.49px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:text-fs20">
                          {STRINGS["lbl_600"] || ""}
                        </Text>
                      </Row>
                      <Row className="2xl:mt-[2px] 3xl:mt-[2px] font-poppins items-center justify-between lg:mt-[1px] mt-[2.0300293px] px-[0] w-[100%] xl:mt-[1px]">
                        <Text className="2xl:min-h-[33px] 2xl:ml-[35px] 3xl:min-h-[40px] 3xl:ml-[42px] 3xl:text-fs27 align-top font-normal font-poppins lg:min-h-[26px] lg:ml-[27px] lg:text-fs17 min-h-[33.49px] ml-[35.139984px] mt-[1px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:ml-[31px] xl:text-fs20">
                          {STRINGS["lbl_winner"] || ""}
                        </Text>
                        <Text className="2xl:min-h-[32px] 2xl:mr-[21px] 3xl:min-h-[39px] 3xl:mr-[25px] 3xl:text-fs27 align-top font-normal font-sora lg:min-h-[25px] lg:mr-[16px] lg:text-fs17 mb-[1px] min-h-[32.96px] mr-[21.26001px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:mr-[18px] xl:text-fs20">
                          {STRINGS["lbl_500"] || ""}
                        </Text>
                      </Row>
                      <Row className="2xl:mt-[17px] 3xl:mt-[21px] justify-between lg:mt-[13px] mt-[17.70996px] mx-[auto] px-[0] w-[101%] xl:mt-[15px]">
                        <Column className="2xl:mb-[5px] 3xl:mb-[6px] font-poppins items-end justify-start lg:mb-[4px] mb-[5.7299805px] w-[50%] xl:mb-[5px]">
                          <Text className="2xl:min-h-[33px] 2xl:mr-[3px] 3xl:min-h-[40px] 3xl:mr-[3px] 3xl:text-fs27 align-top font-semibold lg:min-h-[26px] lg:mr-[2px] lg:text-fs17 min-h-[33.49px] mr-[3.0200195px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:mr-[2px] xl:text-fs20">
                            {STRINGS["lbl_thank_you"] || ""}
                          </Text>
                          <Text className="2xl:min-h-[33px] 2xl:ml-[40px] 2xl:mt-[2px] 3xl:min-h-[40px] 3xl:ml-[48px] 3xl:mt-[2px] 3xl:text-fs27 align-top font-normal lg:min-h-[26px] lg:ml-[31px] lg:mt-[1px] lg:text-fs17 min-h-[33.83px] ml-[40.03px] mr-[1px] mt-[2.170166px] text-fs23 text-left text-orange_A200 xl:min-h-[30px] xl:ml-[35px] xl:mt-[1px] xl:text-fs20">
                            {STRINGS["lbl_teaser"] || ""}
                          </Text>
                        </Column>
                        <Column className="2xl:mr-[21px] 2xl:mt-[3px] 3xl:mr-[25px] 3xl:mt-[4px] font-sora justify-start lg:mr-[16px] lg:mt-[2px] mr-[21.26001px] mt-[3.420166px] w-[25%] xl:mr-[18px] xl:mt-[3px]">
                          <Text className="2xl:min-h-[33px] 3xl:min-h-[40px] 3xl:text-fs27 align-top font-normal lg:min-h-[26px] lg:text-fs17 min-h-[33.49px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:text-fs20">
                            {STRINGS["lbl_500"] || ""}
                          </Text>
                          <Text className="2xl:min-h-[33px] 2xl:mt-[4px] 3xl:min-h-[40px] 3xl:mt-[5px] 3xl:text-fs27 align-top font-normal lg:min-h-[26px] lg:mt-[3px] lg:text-fs17 mb-[1px] min-h-[33.49px] mt-[4.819824px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:mt-[4px] xl:text-fs20">
                            {STRINGS["lbl_700"] || ""}
                          </Text>
                        </Column>
                      </Row>
                      <Row className="2xl:mt-[10px] 3xl:mt-[12px] font-poppins justify-between lg:mt-[8px] mt-[10.720215px] px-[0] w-[100%] xl:mt-[9px]">
                        <Text className="2xl:min-h-[25px] 2xl:mt-[3px] 3xl:min-h-[31px] 3xl:mt-[3px] 3xl:text-fs27 align-top font-medium font-poppins lg:min-h-[20px] lg:mt-[2px] lg:text-fs17 min-h-[25.83px] ml-[1px] mt-[3.1699219px] text-fs23 text-left text-orange_A200 xl:min-h-[22px] xl:mt-[2px] xl:text-fs20">
                          {STRINGS["lbl_grand_total"] || ""}
                        </Text>
                        <Text className="2xl:mb-[7px] 2xl:min-h-[21px] 2xl:mr-[24px] 3xl:mb-[9px] 3xl:min-h-[25px] 3xl:mr-[29px] 3xl:text-fs27 align-top font-semibold font-sora lg:mb-[6px] lg:min-h-[16px] lg:mr-[19px] lg:text-fs17 mb-[7.949951px] min-h-[21.05px] mr-[24.449951px] text-fs23 text-left text-orange_A200 xl:mb-[7px] xl:min-h-[18px] xl:mr-[21px] xl:text-fs20">
                          <span className="text-orange_A200 text-fs23 align-top font-sora text-left font-normal lg:text-fs17 xl:text-fs20 3xl:text-fs27">
                            ₹
                          </span>
                          <span className="text-orange_A200 text-fs23 align-top font-sora text-left font-normal lg:text-fs17 xl:text-fs20 3xl:text-fs27">
                            11,700
                          </span>
                        </Text>
                      </Row>
                    </Column>
                    <Column className="2xl:mb-[49px] 2xl:mr-[10px] 2xl:mt-[10px] 3xl:mb-[58px] 3xl:mr-[12px] 3xl:mt-[12px] font-sora justify-start lg:mb-[38px] lg:mr-[8px] lg:mt-[7px] mb-[49.079834px] mr-[10.640015px] mt-[10.27002px] w-[10%] xl:mb-[43px] xl:mr-[9px] xl:mt-[9px]">
                      <Text className="2xl:min-h-[32px] 3xl:min-h-[39px] 3xl:text-fs27 align-top font-semibold lg:min-h-[25px] lg:text-fs17 min-h-[32.96px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:text-fs20">
                        {STRINGS["lbl_x_6"] || ""}
                      </Text>
                      <Text className="2xl:min-h-[33px] 2xl:mt-[22px] 3xl:min-h-[40px] 3xl:mt-[26px] 3xl:text-fs27 align-top font-semibold lg:min-h-[26px] lg:mt-[17px] lg:text-fs17 min-h-[33.49px] mt-[22.330078px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:mt-[19px] xl:text-fs20">
                        {STRINGS["lbl_x_6"] || ""}
                      </Text>
                      <Text className="2xl:min-h-[33px] 2xl:mt-[21px] 3xl:min-h-[40px] 3xl:mt-[25px] 3xl:text-fs27 align-top font-semibold lg:min-h-[26px] lg:mt-[16px] lg:text-fs17 min-h-[33.49px] mt-[21.27002px] text-fs23 text-left text-orange_A200 xl:min-h-[29px] xl:mt-[18px] xl:text-fs20">
                        {STRINGS["lbl_x_1"] || ""}
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Stack>
            </Stack>
          </Column>
          <Image
            src="img_squarecardboar.png"
            className="2xl:h-[174px] 3xl:h-[209px] absolute h-[173.57px] lg:h-[135px] right-[0] top-[0] w-[26%] xl:h-[155px]"
            alt="SquareCardboar"
          />
        </Stack>
        <Stack className="2xl:h-[365px] 3xl:h-[438px] 3xl:mt-[93px] 3xl:mx-[72px] h-[364px] lg:h-[284px] lg:mt-[60px] lg:mx-[46px] mt-[78px] mx-[60px] w-[88%] xl:h-[324px] xl:mt-[69px] xl:mx-[53px]">
          <Stack className="2xl:h-[328px] 3xl:h-[394px] absolute h-[327.32px] lg:h-[255px] right-[0] top-[0] w-[46%] xl:h-[292px]">
            <Image
              src="img_group73_1.svg"
              className="2xl:h-[145px] 3xl:h-[174px] absolute h-[144.85px] lg:h-[113px] object-contain right-[0] top-[0] w-[31%] xl:h-[129px]"
              alt="Group73"
            />
            <Image
              src="img_rectangle31_1.svg"
              className="2xl:h-[275px] 3xl:h-[330px] absolute bottom-[0] h-[274.65px] left-[0] lg:h-[214px] object-contain w-[94%] xl:h-[245px]"
              alt="Rectangle31"
            />
          </Stack>
          <div className="2xl:h-[168px] 3xl:h-[202px] absolute bg-orange_A200 bottom-[0] h-[167.42px] left-[0] lg:h-[131px] rounded-bl-[0] rounded-br-[100px] rounded-tl-[0] rounded-tr-[0] w-[14%] xl:h-[149px]"></div>
          <Column className="-translate-x-1/2 3xl:top-[63px] absolute bg-gray_800 font-alef justify-start left-[50%] lg:top-[41px] rounded-radius75 top-[53px] w-[95%] xl:top-[47px]">
            <Text className="2xl:min-h-[50px] 3xl:min-h-[60px] 3xl:mt-[61px] 3xl:mx-[103px] 3xl:text-fs48 align-top font-normal lg:min-h-[39px] lg:mt-[39px] lg:mx-[66px] lg:text-fs31 min-h-[50.79px] mt-[51px] mx-[86px] text-fs40 text-left text-white_A700 xl:min-h-[45px] xl:mt-[45px] xl:mx-[76px] xl:text-fs35">
              {STRINGS["msg_subscribe_newsl"] || ""}
            </Text>
            <Stack className="2xl:h-[82px] 2xl:mb-[57px] 3xl:h-[99px] 3xl:mb-[69px] font-alef h-[81.84px] lg:h-[64px] lg:mb-[44px] mb-[57.789795px] mx-[auto] w-[85%] xl:h-[73px] xl:mb-[51px]">
              <Row className="absolute bg-white_A700 border border-gray_100 border-solid items-center right-[0] rounded-radius60 shadow-bs1 top-[0] w-[48%]">
                <Text className="2xl:mb-[26px] 2xl:min-h-[20px] 2xl:ml-[33px] 2xl:mt-[28px] 3xl:mb-[31px] 3xl:min-h-[24px] 3xl:ml-[40px] 3xl:mt-[33px] 3xl:text-fs19 align-top font-normal lg:mb-[20px] lg:min-h-[16px] lg:ml-[26px] lg:mt-[21px] lg:text-fs12 mb-[26.340088px] min-h-[20.69px] ml-[33.679993px] mt-[28.21997px] text-fs16 text-gray_500 text-left xl:mb-[23px] xl:min-h-[18px] xl:ml-[29px] xl:mt-[25px] xl:text-fs14">
                  {STRINGS["msg_enter_your_emai"] || ""}
                </Text>
                <Button className="2xl:mb-[3px] 2xl:ml-[55px] 2xl:mr-[12px] 2xl:mt-[9px] 3xl:mb-[4px] 3xl:ml-[66px] 3xl:mr-[14px] 3xl:mt-[11px] 3xl:px-[36px] 3xl:py-[24px] 3xl:text-fs19 align-middle bg-blue_600 border-bw font-normal lg:mb-[2px] lg:ml-[43px] lg:mr-[9px] lg:mt-[7px] lg:px-[23px] lg:py-[15px] lg:text-fs12 mb-[3.840088px] ml-[55.47003px] mr-[12.130005px] mt-[9.409912px] px-[30px] py-[20px] rounded-radius60 text-center text-fs16 text-white_A700 tracking-ls1 w-[39%] xl:mb-[3px] xl:ml-[49px] xl:mr-[10px] xl:mt-[8px] xl:px-[26px] xl:py-[17px] xl:text-fs14">
                  {STRINGS["lbl_contact_now"] || ""}
                </Button>
              </Row>
              <Text className="2xl:min-h-[27px] 3xl:min-h-[32px] 3xl:text-fs21 absolute align-top bottom-[0] font-normal left-[0] lg:min-h-[21px] lg:text-fs14 min-h-[27.28px] text-fs18 text-left text-white_A700 xl:min-h-[24px] xl:text-fs16">
                {STRINGS["msg_i_will_update_g"] || ""}
              </Text>
            </Stack>
          </Column>
        </Stack>
        <Column className="3xl:mt-[93px] justify-start lg:mt-[60px] mt-[78px] w-[100%] xl:mt-[69px]">
          <Column className="items-center mx-[auto] w-[100%]">
            <div className="2xl:h-[2px] 3xl:h-[2px] 3xl:ml-[165px] 3xl:mr-[122px] border border-gray_300 border-solid h-[1px] lg:ml-[107px] lg:mr-[79px] ml-[138px] mr-[102px] w-[84%] xl:ml-[122px] xl:mr-[90px]"></div>
          </Column>
          <Column className="3xl:mt-[70px] lg:mt-[45px] mt-[59px] w-[100%] xl:mt-[52px]">
            <Row className="font-alef items-center justify-end w-[100%]">
              <Text className="3xl:min-h-[39px] 3xl:ml-[165px] 3xl:text-fs28 align-top font-normal lg:min-h-[25px] lg:ml-[107px] lg:text-fs18 min-h-[33px] ml-[138px] text-fs24 text-left text-white_A700 xl:min-h-[29px] xl:ml-[122px] xl:text-fs21">
                <span className="text-white_A700 text-fs24 align-top font-girassol text-left font-normal lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                  A+
                </span>
                <span className="text-white_A700 text-fs24 align-top font-alef text-left font-normal lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                  {" "}
                  Studio
                </span>
              </Text>
              <Text className="3xl:min-h-[32px] 3xl:ml-[431px] 3xl:text-fs24 align-top font-normal lg:min-h-[21px] lg:ml-[279px] lg:my-[2px] lg:text-fs15 min-h-[27px] ml-[359px] my-[3px] text-fs20 text-left text-white_A700 xl:min-h-[24px] xl:ml-[319px] xl:my-[2px] xl:text-fs17">
                {STRINGS["lbl_what_we_do"] || ""}
              </Text>
              <Text className="3xl:min-h-[32px] 3xl:ml-[188px] 3xl:text-fs24 align-top font-normal lg:min-h-[21px] lg:ml-[122px] lg:my-[2px] lg:text-fs15 min-h-[27px] ml-[157px] my-[3px] text-fs20 text-left text-white_A700 xl:min-h-[24px] xl:ml-[139px] xl:my-[2px] xl:text-fs17">
                {STRINGS["lbl_company"] || ""}
              </Text>
              <Text className="3xl:min-h-[32px] 3xl:ml-[154px] 3xl:text-fs24 align-top font-normal lg:min-h-[21px] lg:ml-[100px] lg:my-[2px] lg:text-fs15 min-h-[27px] ml-[129px] my-[3px] text-fs20 text-left text-white_A700 xl:min-h-[24px] xl:ml-[114px] xl:my-[2px] xl:text-fs17">
                {STRINGS["lbl_support"] || ""}
              </Text>
              <Text className="3xl:min-h-[32px] 3xl:mx-[128px] 3xl:text-fs24 align-top font-normal lg:min-h-[21px] lg:mx-[83px] lg:my-[2px] lg:text-fs15 min-h-[27px] mx-[107px] my-[3px] text-fs20 text-left text-white_A700 xl:min-h-[24px] xl:mx-[95px] xl:my-[2px] xl:text-fs17">
                {STRINGS["lbl_contact"] || ""}
              </Text>
            </Row>
            <Row className="3xl:mt-[22px] font-alef justify-end lg:mt-[14px] mt-[19px] w-[100%] xl:mt-[16px]">
              <Text className="3xl:mb-[24px] 3xl:min-h-[105px] 3xl:ml-[165px] 3xl:text-fs16 align-top font-normal lg:mb-[15px] lg:min-h-[68px] lg:ml-[107px] lg:mt-[3px] lg:text-fs10 mb-[20px] min-h-[88px] ml-[138px] mt-[4px] text-fs14 text-left text-white_A700 w-[19%] xl:mb-[17px] xl:min-h-[78px] xl:ml-[122px] xl:mt-[3px] xl:text-fs12">
                {STRINGS["msg_leading_digital"] || ""}
              </Text>
              <Text className="3xl:min-h-[134px] 3xl:ml-[229px] 3xl:text-fs16 align-top font-normal lg:min-h-[87px] lg:ml-[148px] lg:text-fs10 min-h-[112px] ml-[191px] text-fs14 text-left text-white_A700 w-[11%] xl:min-h-[99px] xl:ml-[169px] xl:text-fs12">
                {STRINGS["msg_web_design_app"] || ""}
              </Text>
              <Text className="3xl:mb-[33px] 3xl:min-h-[100px] 3xl:ml-[140px] 3xl:text-fs16 align-top font-normal lg:mb-[21px] lg:min-h-[65px] lg:ml-[91px] lg:text-fs10 mb-[28px] min-h-[84px] ml-[117px] text-fs14 text-left text-white_A700 w-[8%] xl:mb-[24px] xl:min-h-[74px] xl:ml-[104px] xl:text-fs12">
                {STRINGS["msg_about_us_career"] || ""}
              </Text>
              <Text className="3xl:mb-[33px] 3xl:min-h-[100px] 3xl:ml-[127px] 3xl:text-fs16 align-top font-normal lg:mb-[21px] lg:min-h-[65px] lg:ml-[82px] lg:text-fs10 mb-[28px] min-h-[84px] ml-[106px] text-fs14 text-left text-white_A700 w-[4%] xl:mb-[24px] xl:min-h-[74px] xl:ml-[94px] xl:text-fs12">
                {STRINGS["msg_faq_policy_busi"] || ""}
              </Text>
              <Text className="3xl:mb-[67px] 3xl:min-h-[67px] 3xl:ml-[148px] 3xl:mr-[130px] 3xl:text-fs16 align-top font-normal lg:mb-[43px] lg:min-h-[43px] lg:ml-[96px] lg:mr-[84px] lg:text-fs10 mb-[56px] min-h-[56px] ml-[124px] mr-[109px] text-fs14 text-left text-white_A700 w-[5%] xl:mb-[49px] xl:min-h-[49px] xl:ml-[110px] xl:mr-[96px] xl:text-fs12">
                {STRINGS["msg_whatsapp_suppor"] || ""}
              </Text>
            </Row>
            <Row className="3xl:mt-[24px] items-center justify-start lg:mt-[15px] mt-[20px] w-[100%] xl:mt-[17px]">
              <Row className="items-center w-[10%]">
                <Image
                  src="img_facebook_1.svg"
                  className="2xl:h-[37px] 3xl:h-[44px] h-[36px] lg:h-[28px] object-contain w-[auto] xl:h-[33px]"
                  alt="facebook"
                />
                <Image
                  src="img_twitter_1.svg"
                  className="2xl:h-[37px] 3xl:h-[44px] 3xl:ml-[19px] h-[36px] lg:h-[28px] lg:ml-[12px] ml-[16px] object-contain w-[auto] xl:h-[33px] xl:ml-[14px]"
                  alt="twitter"
                />
                <Image
                  src="img_linkedin_1.svg"
                  className="2xl:h-[37px] 3xl:h-[44px] 3xl:ml-[19px] h-[36px] lg:h-[28px] lg:ml-[12px] ml-[16px] object-contain w-[auto] xl:h-[33px] xl:ml-[14px]"
                  alt="linkedin"
                />
              </Row>
            </Row>
          </Column>
          <Column className="3xl:mt-[34px] font-alef items-center lg:mt-[22px] mt-[29px] mx-[auto] w-[100%] xl:mt-[25px]">
            <div className="2xl:h-[2px] 3xl:h-[2px] 3xl:ml-[165px] 3xl:mr-[122px] border border-gray_100 border-solid h-[1px] lg:ml-[107px] lg:mr-[79px] ml-[138px] mr-[102px] w-[84%] xl:ml-[122px] xl:mr-[90px]"></div>
            <div className="2xl:h-[2px] 3xl:h-[2px] 3xl:ml-[165px] 3xl:mr-[122px] border border-gray_100 border-solid h-[1px] lg:ml-[107px] lg:mr-[79px] ml-[138px] mr-[102px] w-[84%] xl:ml-[122px] xl:mr-[90px]"></div>
            <Text className="3xl:min-h-[26px] 3xl:mt-[19px] 3xl:text-fs16 align-top font-normal lg:min-h-[17px] lg:mt-[12px] lg:text-fs10 min-h-[22px] mt-[16px] mx-[auto] text-fs14 text-gray_501 text-left xl:min-h-[19px] xl:mt-[14px] xl:text-fs12">
              {STRINGS["msg_copyright_202"] || ""}
            </Text>
          </Column>
        </Column>
      </Column>
    </Column>
  );
};

export default DarkPagePage;
