import { Container, Stack, Text, Image, Link } from "@chakra-ui/react";

import background from "@assets/backgroundimage.png";
import twitter from "@assets/twitterbird.png";
import fp2 from "@assets/footprint.gif";
import board7 from "@assets/board7.png";
import logo1 from "@assets/logo2.png";
import hole from "@assets/hole1.png";
import hole2 from "@assets/hole2.png";
import board5 from "@assets/board5.png";
import board6 from "@assets/board6.png";
import letter from "@assets/letter.png";
import jincat from "@assets/jincat.png";
import squirrel1 from "@assets/squirrel1.gif";
// import squirrel2 from "@assets/squirrel2.gif";
import squirrel3 from "@assets/squirrel3.gif";
// import music from "@assets/Didyouknow.mp3";
import petdog from "@assets/petdog.gif";
import music2 from "@assets/hiding.mp3";

export default function main() {
  return (
    <Container
      bgImage={`url(${background})`}
      maxW={"9xl"}
      h={"1175px"}
      w={"2425px"}
      bgPosition={"50% 50%"}
      bgSize={"cover"}
    > {/* 배경화면 */}
      <audio controls autoplay src={music2}>
        audio
      </audio>
      {/* 배경음악 */}

      <Stack
        textAlign={"center"}
        align={"center"}
        position={"relative"}
        text-align={"center"}
        image-align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      > 
        <Stack>
          <Link href={"https://twitter.com/with_my_friend"} target="_blank">
            {/* tweet change */}
            <div>
              <Image
                src={twitter}
                position={"absolute"}
                w={150}
                h={150}
                right={"770px"}
                top={"85px"}
              />
            </div>
            {/* 트위터 새 */}

            <Text
              rounded={"full"}
              color={"purple.600"}
              fontWeight={400}
              fontSize={{ base: "3xl", sm: "1xl", md: "1xl" }}
              _hover={{ bg: "yellow.600" }}
              position={"absolute"}
              right={"920px"}
              top={"105px"}
            >
              tweeeet!
            </Text>
            {/* 트위터 문구 */}
          </Link>
        </Stack>

        <Stack>
          <Image
            src={board7}
            position={"absolute"}
            w={150}
            h={150}
            left={"880px"}
            top={"510px"}
          />
          {/* 발자국 가는길 표지판 */}
          <Link href={"https://www.youtube.com/@balltagu"}>
            <Text
              rounded={"full"}
              px={5}
              _hover={{ bg: "purple.600" }}
              position={"absolute"}
              left={"885px"}
              top={"550px"}
            >
              발자국 가는 길
            </Text>
            {/* 발자국 가는길 문구 */}
          </Link>
        </Stack>

        <Stack>
          <Image
            src={fp2}
            position={"absolute"}
            w={300}
            h={400}
            left={"1025px"}
            bottom={"-80px"}
          />
          {/* 걸음걸이 gif */}
        </Stack>
        <Stack>
          <Image
            src={logo1}
            position={"absolute"}
            w={7}
            h={7}
            left={"1212px"}
            top={"12px"}
          />
          {/* 깃발안 로고 */}
        </Stack>
        <Stack>
          <Image
            src={logo1}
            position={"absolute"}
            w={200}
            h={200}
            right={"-10px"}
            top={"-100px"}
          />
          {/* 우측 상단 로고 */}
        </Stack>
        <Stack>
          <Link href={"https://open.kakao.com/o/gJ1u8dOe"}>
          
            <Image
              src={hole}
              position={"absolute"}
              w={200}
              h={200}
              right={"1280px"}
              bottom={"80px"}
            />
          </Link>
        </Stack>

        <Stack>
          <Image
            src={board5}
            position={"absolute"}
            w={250}
            h={300}
            left={"10px"}
            bottom={"-70px"}
          />
          {/* 추억앨범 보더 */}
          <Link
            href={
              "https://www.notion.so/eb5cf54aa96f485b8f20a2b98a087ec1?v=e5da9d6e2d44499fabb1240210be3b76"
            }
          >{/* 추억앨범 링크 */}
            <Text
              rounded={"full"}
              color={"black"}
              fontWeight={200}
              fontSize={{ base: "3xl", sm: "1xl", md: "1xl" }}
              px={15}
              _hover={{ bg: "purple.600" }}
              position={"absolute"}
              left={"60px"}
              bottom={"-50px"}
            >
              추억 앨범
            </Text>
            {/* 추억앨범 문구 */}
          </Link>
        </Stack>

        <Stack>
          <Image
            src={board5}
            position={"absolute"}
            w={250}
            h={300}
            left={"10px"}
            bottom={"90px"}
          />
          {/* 발자국이란 보더 */}
          <Link
            href={
              "https://flaxen-sauce-7a0.notion.site/Footprint-23bd2d85a0014e63a393e8698b10dc18"
            }
          >
            {/* 발자국이란 링크 */}
            <Text
              rounded={"full"}
              color={"black"}
              fontWeight={200}
              fontSize={{ base: "3xl", sm: "1xl", md: "1xl" }}
              px={15}
              _hover={{ bg: "purple.600" }}
              position={"absolute"}
              left={"50px"}
              bottom={"120px"}
            >
              발자국이란?
            </Text>
            {/* 발자국이란 문구 */}
          </Link>
        </Stack>

        <Stack>
          <Text
            rounded={"full"}
            px={25}
            _hover={{ bg: "yellow.600" }}
            position={"absolute"}
            right={"1220px"}
            bottom={"-200px"}
          >
            발자국에 편지보내기
          </Text>
          {/* 발자국에 편지보내기 문구 */}
        </Stack>
        <Stack>
          <Link href={"https://open.kakao.com/o/gJ1u8dOe"}>
            {/* 카카오톡 입장링크 */}
            <Text
              rounded={"full"}
              px={25}
              bg={"purple.400"}
              _hover={{ bg: "purple.600" }}
              position={"absolute"}
              right={"1150px"}
              top={"450px"}
            >
              Entry
            </Text>
            {/* Entry 문구 */}

          </Link>
        </Stack>

        <Stack>
          <Link href={"https://twitter.com/with_my_friend"}>
            {/* 트위터링크 */}
            <Image
              src={letter}
              position={"absolute"}
              w={90}
              h={90}
              left={"1030px"}
              top={"950px"}
            />
            {/* 편지 그림 */}
          </Link>
        </Stack>
        <Stack>
          <Link href={"https://twitter.com/with_my_friend"}>
           {/* hole change */}
            <Image
              src={hole2}
              position={"absolute"}
              w={500}
              h={500}
              left={"450px"}
              bottom={"-205px"}
            />
          </Link>
        </Stack>
        <Stack>
          <Image
            src={board6}
            position={"absolute"}
            w={775}
            h={775}
            right={"280px"}
            bottom={"-120px"}
          />
        </Stack>
        <Stack>
          {/* cat change */}
          <Image
            src={jincat}
            position={"absolute"}
            w={450}
            h={450}
            right={"430px"}
            bottom={"-60px"}
          />
        </Stack>
        <Stack>
          <Image
            src={squirrel1}
            position={"absolute"}
            w={800}
            h={250}
            left={"300px"}
            bottom={"75px"}
          />
        </Stack>
        <Stack>
          <Image
            src={squirrel3}
            position={"absolute"}
            w={400}
            h={800}
            left={"2000px"}
            top={"300px"}
          />
        </Stack>
        <Stack>
          <Image
            src={petdog}
            position={"absolute"}
            w={350}
            h={450}
            left={"1880px"}
            top={"650px"}
          />
        </Stack>
      </Stack>
    </Container>
  );
}
