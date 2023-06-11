import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const pieData = [
  {
    name: 'Bitcoin',
    population: 63,
    color: 'orange',
  },
  {
    name: 'Dogecoin',
    population: 9,
    color: 'gold',
  },
  {
    name: 'Ethereum',
    population: 19,
    color: 'darkblue',
  },
  {
    name: 'Tether',
    population: 6,
    color: 'green',
  },
  {
    name: 'Polygon',
    population: 3,
    color: 'purple',
  },
];

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

const StockAssetsChartScreen = () => {
    const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>Stock Assets Chart</Text>*/}
      <PieChart
        data={pieData}
        width={screenWidth-10}
        height={300}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="50"
        absolute
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default StockAssetsChartScreen;