export default {
  // v-pin directive
  bind: (element, binding) => {
    // First way of doing
    // if (binding.arg !== 'position') return;
    // Object.keys(binding.modifiers).forEach((key) => {
    //   element.style[key] = '5px';
    // });

    // Second way of doing
    Object.keys(binding.value).forEach((position) => {
      element.style[position] = binding.value[position];
    });

    // Both use this
    element.style.position = 'absolute';
    // element.style.bottom = '5px';
    // element.style.right = '5px';
  },
};
