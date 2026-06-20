import { SymbolView } from 'expo-symbols';
import { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type Message = {
  id: string;
  text: string;
  isUser: boolean;
};

export default function PartnerScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! I am your AI Travel Partner. Where would you like to go?',
      isUser: false,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const flatListRef = useRef<FlatList>(null);
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Mock AI Response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `That sounds like a great idea! I can help you plan a trip there. Should we start looking at flights or accommodations?`,
        isUser: false,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages]);

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.isUser;
    return (
      <Animated.View
        entering={FadeInUp.duration(400).springify()}
        style={[
          styles.messageBubble,
          isUser ? styles.userBubble : [styles.aiBubble, { backgroundColor: theme.backgroundElement }],
          isUser && { backgroundColor: theme.text },
        ]}>
        <ThemedText style={{ color: isUser ? theme.background : theme.text }}>
          {item.text}
        </ThemedText>
      </Animated.View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <ThemedView style={[styles.container, { paddingTop: insets.top }]}>
        <ThemedView style={styles.header}>
          <ThemedText type="subtitle">Travel Partner</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Powered by AI
          </ThemedText>
        </ThemedView>

        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={renderMessage}
          contentContainerStyle={[styles.messageList, { paddingBottom: Spacing.four }]}
          showsVerticalScrollIndicator={false}
        />

        {isTyping && (
          <Animated.View entering={FadeInDown} style={styles.typingIndicator}>
            <ActivityIndicator size="small" color={theme.textSecondary} />
            <ThemedText type="small" themeColor="textSecondary" style={{ marginLeft: Spacing.two }}>
              AI is typing...
            </ThemedText>
          </Animated.View>
        )}

        <ThemedView
          type="backgroundElement"
          style={[
            styles.inputContainer,
            { paddingBottom: insets.bottom + BottomTabInset + Spacing.two },
          ]}>
          <TextInput
            style={[styles.textInput, { color: theme.text, backgroundColor: theme.background }]}
            placeholder="Ask about flights, hotels, itineraries..."
            placeholderTextColor={theme.textSecondary}
            value={inputText}
            onChangeText={setInputText}
            multiline
            maxLength={500}
          />
          <Pressable
            style={({ pressed }) => [
              styles.sendButton,
              { backgroundColor: theme.text, opacity: pressed ? 0.7 : 1 },
            ]}
            onPress={handleSend}>
            <SymbolView
              name={{ ios: 'arrow.up', android: 'arrow_upward', web: 'arrow_upward' }}
              tintColor={theme.background}
              size={20}
              weight="bold"
            />
          </Pressable>
        </ThemedView>
      </ThemedView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.four,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(150, 150, 150, 0.2)',
    alignItems: 'center',
  },
  messageList: {
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    gap: Spacing.three,
  },
  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three,
    borderRadius: Spacing.five,
  },
  userBubble: {
    alignSelf: 'flex-end',
    borderBottomRightRadius: Spacing.one,
  },
  aiBubble: {
    alignSelf: 'flex-start',
    borderBottomLeftRadius: Spacing.one,
  },
  typingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.six,
    paddingVertical: Spacing.two,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.three,
    gap: Spacing.two,
    alignItems: 'flex-end',
    borderTopLeftRadius: Spacing.five,
    borderTopRightRadius: Spacing.five,
  },
  textInput: {
    flex: 1,
    minHeight: 44,
    maxHeight: 120,
    borderRadius: Spacing.four,
    paddingHorizontal: Spacing.four,
    paddingTop: 12,
    paddingBottom: 12,
    fontSize: 16,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
