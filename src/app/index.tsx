import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { SymbolView } from 'expo-symbols';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const POPULAR_DESTINATIONS = [
  {
    id: '1',
    title: 'Bali, Indonesia',
    description: 'Explore the beautiful beaches and ancient temples.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
    rating: '4.8',
  },
  {
    id: '2',
    title: 'Santorini, Greece',
    description: 'Experience stunning sunsets and iconic white architecture.',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e',
    rating: '4.9',
  },
  {
    id: '3',
    title: 'Kyoto, Japan',
    description: 'Walk through historic shrines and bamboo forests.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    rating: '4.7',
  },
];

const RECOMMENDED_DEALS = [
  {
    id: '1',
    title: 'Swiss Alps Adventure',
    duration: '7 Days',
    price: '$1,200',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99',
  },
  {
    id: '2',
    title: 'Maldives Getaway',
    duration: '5 Days',
    price: '$2,500',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
  },
];

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
          {/* Header */}
          <View style={styles.header}>
            <ThemedText type="title">Discover</ThemedText>
            <ThemedText type="default" themeColor="textSecondary">
              Explore the best places in the world
            </ThemedText>
          </View>

          {/* Popular Destinations - Horizontal Cards */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <ThemedText type="subtitle">Popular Destinations</ThemedText>
              <ThemedText type="linkPrimary">See All</ThemedText>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalScrollList}
            >
              {POPULAR_DESTINATIONS.map((item) => (
                <Card key={item.id} style={styles.destinationCard}>
                  <Image source={{ uri: item.image }} style={styles.cardImage} />
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardFooter style={styles.cardFooter}>
                    <View style={styles.ratingBadge}>
                      <SymbolView
                        name={{ ios: 'star.fill', android: 'star', web: 'star' }}
                        size={14}
                        tintColor="#EAB308"
                      />
                      <ThemedText type="small" style={{ fontWeight: '600' }}>
                        {item.rating}
                      </ThemedText>
                    </View>
                  </CardFooter>
                </Card>
              ))}
            </ScrollView>
          </View>

          {/* Recommended Deals - Vertical Cards */}
          <View style={[styles.section, { paddingBottom: BottomTabInset + Spacing.four }]}>
            <View style={styles.sectionHeader}>
              <ThemedText type="subtitle">Recommended For You</ThemedText>
            </View>
            
            <View style={styles.verticalList}>
              {RECOMMENDED_DEALS.map((item) => (
                <Card key={item.id} style={styles.dealCard}>
                  <View style={styles.dealContentWrapper}>
                    <Image source={{ uri: item.image }} style={styles.dealImage} />
                    <View style={styles.dealInfo}>
                      <CardHeader style={styles.dealHeader}>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.duration}</CardDescription>
                      </CardHeader>
                      <CardContent style={styles.dealContent}>
                        <ThemedText type="defaultSemiBold">{item.price}</ThemedText>
                      </CardContent>
                    </View>
                  </View>
                </Card>
              ))}
            </View>
          </View>


        </SafeAreaView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
  },
  header: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: Spacing.four,
    gap: Spacing.one,
  },
  section: {
    marginBottom: Spacing.five,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    marginBottom: Spacing.three,
  },
  horizontalScrollList: {
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  destinationCard: {
    width: 260,
  },
  cardImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: Spacing.three - 1,
    borderTopRightRadius: Spacing.three - 1,
  },
  cardFooter: {
    justifyContent: 'flex-end',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
    backgroundColor: 'rgba(234, 179, 8, 0.1)',
    paddingHorizontal: Spacing.two,
    paddingVertical: 4,
    borderRadius: Spacing.four,
  },
  verticalList: {
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  dealCard: {
    overflow: 'hidden',
  },
  dealContentWrapper: {
    flexDirection: 'row',
  },
  dealImage: {
    width: 110,
    height: '100%',
    minHeight: 110,
  },
  dealInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  dealHeader: {
    paddingBottom: Spacing.two,
  },
  dealContent: {
    paddingTop: 0,
    paddingBottom: Spacing.four,
  },
});
