import React, { useState } from "react";
import dayjs from "dayjs";
import range from "lodash-es/range";
import { Box, Button, Heading, Grid } from "@chakra-ui/react";

const weekDays = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

const todayObj = dayjs();
const specialDay = [todayObj.add(3, "day")];

const Calendar = () => {
  const [dayObj, setDayObj] = useState(dayjs());

  const thisYear = dayObj.year();
  const thisMonth = dayObj.month(); // (January as 0, December as 11)
  const daysInMonth = dayObj.daysInMonth();

  const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`);
  const weekDayOf1 = dayObjOf1.day() - 1; // (Sunday as 0, Saturday as 6)

  const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`);
  const weekDayOfLast = dayObjOfLast.day();

  const handlePrev = () => {
    setDayObj(dayObj.subtract(1, "month"));
  };

  const handleNext = () => {
    setDayObj(dayObj.add(1, "month"));
  };
  const handleToDay = () => {
    setDayObj(todayObj);
  };

  return (
    <>
      <Box className={"calendar"} p={"10px"}>
        <Box className="header">
          <Heading as="h2" fontSize={"18px"} display={"inline-block"}>
            Tháng {dayObj.format("MM")}
          </Heading>
          <Box
            position={"relative"}
            float={"right"}
            left={"-10px"}
            top={"-3px"}
          >
            <Button
              onClick={handlePrev}
              variant="outline"
              color={"#8B8988"}
              p={"0px"}
              size="xs"
              fontSize={"18px"}
              border={"0px"}
              _hover={{ bg: "#272422", color: "white" }}
            >
              {" "}
              {"<"}{" "}
            </Button>
            <Button
              onClick={handleToDay}
              variant="outline"
              border={"0px"}
              color={"#8B8988"}
              p={"0px"}
              size="xs"
              fontSize={"18px"}
              _hover={{ bg: "#272422", color: "white" }}
            >
              {" "}
              {"●"}{" "}
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              border={"0px"}
              p={"0px"}
              color={"#8B8988"}
              size="xs"
              fontSize={"18px"}
              _hover={{ bg: "#272422", color: "white" }}
            >
              {" "}
              {">"}{" "}
            </Button>
          </Box>
        </Box>
      </Box>{" "}
      <Grid
        textAlign={"center"}
        templateColumns="repeat(7, 1fr)"
        gap={1}
        m={"10px"}
        fontSize={"14px"}
        fontWeight={"bold"}
      >
        {weekDays.map((d) => (
          <Box key={d} display={"inline-block"}>
            {d}
          </Box>
        ))}

        {range(weekDayOf1).map((i) => (
          <Box key={i} color={"#454241"}>
            {dayObjOf1.subtract(weekDayOf1 - i, "day").date()}
          </Box>
        ))}
        {range(daysInMonth).map((i) =>
          i === todayObj.date() - 1 && thisMonth === todayObj.month() ? (
            <Box
              key={i}
              color={specialDay.some((i) => i === todayObj) ? "white" : "red"}
              bg={
                specialDay.some((i) => i === todayObj) ? "red" : "transparent"
              }
            >
              {i + 1}
            </Box>
          ) : (
            <Box key={i}>{i + 1}</Box>
          )
        )}
        {range(7 - weekDayOfLast).map((i) => (
          <Box key={i} color={"#454241"}>
            {dayObjOfLast.add(i + 1, "day").date()}
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default Calendar;
