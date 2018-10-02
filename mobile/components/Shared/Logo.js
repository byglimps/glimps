import React from "react";
import Svg, { Path } from "react-native-svg";

export default function Logo(props) {
  const { width = "176", height = "128", fill = "#FFF" } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 176 128">
      <Path
        fill={fill}
        fill-rule="evenodd"
        d="M175.8 16.5v95c0 9.2-7.5 16.7-16.7 16.7H17c-9.2 0-16.7-7.5-16.7-16.7v-95C.2 7.3 7.7-.2 17-.2H159c9.2 0 16.7 7.5 16.7 16.7zm-72.8 83v-37H67.7v12H90c-.8 5-5.9 13.9-19 13.9-11.8 0-22.3-8.3-22.3-24.4C48.7 47.2 60.3 40 71 40c11.4 0 17.3 7.3 19.1 13.6l13.2-4.7c-3.5-11-13.8-21.9-32.3-21.9A35.6 35.6 0 0 0 34.8 64c0 23 16.2 37 35.3 37 10.6 0 17.6-4.8 20.8-9.6l.9 8.1H103zm46.3-23a10.4 10.4 0 1 0 0-20.9c-5.8 0-10.4 4.7-10.4 10.5s4.6 10.4 10.4 10.4z"
      />
    </Svg>
  );
}
