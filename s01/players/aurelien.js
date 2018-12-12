export function aurelien($i) {
  let $res = "";
  if ($i % 3 == 0) {
    $res += "fizz";
  }
  if ($i % 5 == 0) {
    $res += "buzz";
  }
  if ($i % 7 == 0) {
    $res += "hiss";
  }
  if ($i % 11 == 0) {
    $res += "howl";
  }

  if (!$res) {
    $res = $i;
  }

  return $res;
}

// export function aurelienLong($i) {
//   let $res = "";
//   if ($i % 3 == 0) {
//     $res += "fizz";
//   }
//   if ($i % 5 == 0) {
//     $res += "buzz";
//   }
//   if ($i % 7 == 0) {
//     $res += "hiss";
//   }
//   if ($i % 11 == 0) {
//     $res += "howl";
//   }

//   if ($i % 1 == 0) {
//     $res += "a";
//   }
//   if ($i % 2 == 0) {
//     $res += "b";
//   }
//   if ($i % 4 == 0) {
//     $res += "c";
//   }
//   if ($i % 6 == 0) {
//     $res += "d";
//   }
//   if ($i % 8 == 0) {
//     $res += "e";
//   }
//   if ($i % 9 == 0) {
//     $res += "f";
//   }
//   if ($i % 10 == 0) {
//     $res += "g";
//   }
//   if ($i % 12 == 0) {
//     $res += "h";
//   }
//   if ($i % 13 == 0) {
//     $res += "i";
//   }
//   if ($i % 14 == 0) {
//     $res += "j";
//   }
//   if ($i % 15 == 0) {
//     $res += "k";
//   }
//   if ($i % 16 == 0) {
//     $res += "l";
//   }
//   if ($i % 17 == 0) {
//     $res += "m";
//   }
//   if ($i % 18 == 0) {
//     $res += "n";
//   }
//   if ($i % 19 == 0) {
//     $res += "o";
//   }
//   if ($i % 20 == 0) {
//     $res += "p";
//   }

//   if (!$res) {
//     $res = $i;
//   }

//   return $res;
// }

// function fizzbuzzhisshowl($i) {
//     $res = '';
//     if ($i % 3 == 0) {
//         $res .= 'fizz';
//     }
//     if ($i % 5 == 0) {
//         $res .= 'buzz';
//     }
//     if ($i % 7 == 0) {
//         $res .= 'hiss';
//     }
//     if ($i % 11 == 0) {
//         $res .= 'howl';
//     }

//     if (!$res) {
//         $res = $i;
//     }
//     $res .= "\n";

//     return $res;
// }

// for ($i = 1; $i < 200; $i++) {
//     echo fizzbuzzhisshowl($i);
// }
