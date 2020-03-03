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

const mostReadItemGridProps = columnLayout => ({
  item: true,
  columns: {
    group0: 6,
    group1: 6,
    group2: 6,
    group3: {
      oneColumn: 6,
      twoColumn: 3,
      multiColumn: 3,
    }[columnLayout],
    group4: {
      oneColumn: 8,
      twoColumn: 4,
      multiColumn: 4,
    }[columnLayout],
    group5: {
      oneColumn: 20,
      twoColumn: 10,
      multiColumn: 4,
    }[columnLayout],
  },
});

export { mostReadListGridProps, mostReadItemGridProps };
