const mostReadListGridProps = maxTwoColumns => ({
  enableGelGutters: true,
  enableGelMargins: true,
  columns: {
    group0: 6,
    group1: 6,
    group2: 6,
    group3: 6,
    group4: 8,
    group5: maxTwoColumns ? 8 : 20,
  },
});

const mostReadItemGridProps = {
  item: true,
  columns: {
    group0: 6,
    group1: 6,
    group2: 6,
    group3: 3,
    group4: 4,
    group5: 4,
  },
};

export { mostReadListGridProps, mostReadItemGridProps };
