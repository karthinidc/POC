/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  BarcodePicker,
  ScanditModule,
  Barcode,
  ScanSettings
} from 'scandit-react-native';

let SCANDIT_LICENSE_KEY_QA_IOS = 'ATZOyzARERv2O0a34gbAP1Yy9nr8D6/QkFRqZH4Sl9tZezNNsVj0q6FulNQaHHqkjHpmAzNgExaiW6Eo736RF9tiq+1DdqSFAW+E7J5Qdk+3TIPm0VCcRnJljhPdYArz/Vo2ePRcLv9MDVx44Dqg/w4hDsNR1hSQ5zuvKE2A+RaPgKM1siKs/E9SANQ0on7lEnuxzOd5Vqxo0Fl2WJtJca6V22JbSASxHr6laQUtnEQMLJj18W1jOGjW5beSW6czLRl4O1V3/MMA3O/B47XZeDOLZVY/v10/ia/GFCvx4pWQweWq/FS5XNOX4Kk9sRsc27zgIxxWZM4Mqg69B5tvB2FtVq+uBOBtxMOmJNjYMhILAoHLsoLLfw6W2V5w9ewbZcjcHlXRDtGvz4OtPL47oNUAJ+PpbiQw/mGkEEWyCD0ffOh/NZGvrD+IV7Lraxc/ISBftsJV3d/6XjsQguFSHByBUuQ+1tEUGNagiyP3b6srxmbOf9VhSBpUf4PSuv8PAG2CeHbUDrspnVEXe3f0FfePQxw6UPikeWRq+cqWvgCURMaQpOWZQImUKwmCkPnZ5TQZoQs6IQmcbuR6uMGC0Xo/BHCzClkTykbYAWTD35Fjw/5LIqYGl4XoN72l2QeEcIkw+LccAAJIRo/cXowqSQqktGx/efSuruhPDbFepZGBMx1Mi+zKxMadsIhzijD9LGb0ZDRtS6uluo1MmfUTRD2H+Ksy4vztrZNLqXnz0O7PDtL2wi9w3OgOu6FJ1eTBX/B+YXxE8SmA3uLh+fEbqbNL/obpUBfXOAViejr197glnt89h+iBQKFxGwhVYdtlH+7ATw==';

// Set your license key.
ScanditModule.setAppKey(SCANDIT_LICENSE_KEY_QA_IOS);
this.settings = new ScanSettings();
this.settings.setSymbologyEnabled(Barcode.Symbology.EAN13, true);
this.settings.setSymbologyEnabled(Barcode.Symbology.EAN8, true);
this.settings.setSymbologyEnabled(Barcode.Symbology.UPCA, true);

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
