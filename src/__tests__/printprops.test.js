import orderByProps from "../js/printprops";

test('print properties', () => {
  const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
  const orderSort = ["name", "level"];

  const expected = [
    { key: "name", value: "мечник" },
    { key: "level", value: 2 },
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 }
  ];

  const sortArr = orderByProps(obj, orderSort);

  expect(sortArr).toEqual(expected);
});
