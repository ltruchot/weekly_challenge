// <?php

// function computeFizzbuzz($rules, $index, $input)
//     {
// 		if (count($rules) == $index) return '';
// 		$prepend = $input % $rules[$index][0] == 0 ? $rules[$index][1] : '';
// 		return $prepend . computeFizzbuzz($rules, $index + 1, $input);
//     }

// function fizzbuzz ($input) {
// 	$rules = [
//         [3, 'fizz'],
//         [5, 'buzz'],
//         [7, 'hiss'],
//         [11, 'howl'],
//     ];

// 	$output = computeFizzbuzz($rules, 0, $input);
// 	return $output === '' ? $input : $output;
// }

// echo fizzbuzz(11);

function computeFizzbuzz($rules, $index, $input) {
  if ($rules.length === $index) return "";
  const $prepend = $input % $rules[$index][0] === 0 ? $rules[$index][1] : "";
  return $prepend + computeFizzbuzz($rules, $index + 1, $input);
}

export const valentin = function($input) {
  const $rules = [[3, "fizz"], [5, "buzz"], [7, "hiss"], [11, "howl"]];
  const $output = computeFizzbuzz($rules, 0, $input);
  return $output === "" ? $input : $output;
};
