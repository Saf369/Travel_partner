import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { ThemedText, ThemedTextProps } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';

export function Card({ style, ...props }: ViewProps) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.background,
          borderColor: 'rgba(150,150,150,0.2)',
        },
        style,
      ]}
      {...props}
    />
  );
}

export function CardHeader({ style, ...props }: ViewProps) {
  return <View style={[styles.cardHeader, style]} {...props} />;
}

export function CardTitle({ style, ...props }: ThemedTextProps) {
  return (
    <ThemedText
      type="defaultSemiBold"
      style={[styles.cardTitle, style]}
      {...props}
    />
  );
}

export function CardDescription({ style, ...props }: ThemedTextProps) {
  return (
    <ThemedText
      type="small"
      themeColor="textSecondary"
      style={[styles.cardDescription, style]}
      {...props}
    />
  );
}

export function CardContent({ style, ...props }: ViewProps) {
  return <View style={[styles.cardContent, style]} {...props} />;
}

export function CardFooter({ style, ...props }: ViewProps) {
  return <View style={[styles.cardFooter, style]} {...props} />;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Spacing.three,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    padding: Spacing.four,
    gap: Spacing.one,
  },
  cardTitle: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.4,
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
  cardContent: {
    padding: Spacing.four,
    paddingTop: 0,
  },
  cardFooter: {
    padding: Spacing.four,
    paddingTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
