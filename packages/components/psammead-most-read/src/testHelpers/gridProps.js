const mostReadListGridProps = {
  enableGelGutters: true,
  enableGelMargins: true,
  columns: {
    group0: 6,
    group1: 6,
    group2: 6,
    group3: 6,
    group4: 8,
    group5: 20,
  },
};

const mostReadItemGridProps = (maxTwoColumns) => ({
  item: true,
  columns: {
    group0: 6,
    group1: 6,
    group2: 6,
    group3: 3,
    group4: 4,
    group5: maxTwoColumns ? 10 : 4,
  },
});

export { mostReadListGridProps, mostReadItemGridProps };
