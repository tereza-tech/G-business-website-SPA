import React from "react";
import { STRINGS } from "../../constants/string";
import { Column } from "../../components/Column";
import { Stack } from "../../components/Stack";
import { Image } from "../../components/Image";

const Pluginfilecover1Page = () => {
  return (
    <Column className="bg-gray_53 items-center justify-end ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[2024px] 3xl:h-[2428px] h-[2022px] lg:h-[1573px] mx-[auto] w-[64%] xl:h-[1799px]">
        <Image
          src="img_image2.png"
          className="2xl:h-[856px] 3xl:h-[1027px] absolute h-[855px] lg:h-[665px] right-[0] top-[0] w-[47%] xl:h-[761px]"
          alt="image2"
        />
        <Image
          src="img_image1.png"
          className="-translate-y-1/2 2xl:h-[1959px] 3xl:h-[2350px] absolute h-[1957px] left-[0] lg:h-[1523px] top-[50%] w-[57%] xl:h-[1741px]"
          alt="image1"
        />
      </Stack>
    </Column>
  );
};

export default Pluginfilecover1Page;
