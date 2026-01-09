import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { PROMEDIX_CURRICULUM, ChapterData } from '../data/ProMedixCurriculumStructure';

interface ProMedixChapterListProps {
  onChapterSelect?: (chapter: ChapterData) => void;
}

const ProMedixChapterList: React.FC<ProMedixChapterListProps> = ({ onChapterSelect }) => {
  const renderModuleHeader = (moduleNumber: number, title: string) => (
    <View style={styles.moduleHeader}>
      <Text style={styles.moduleNumber}>Module {moduleNumber}</Text>
      <Text style={styles.moduleTitle}>{title}</Text>
    </View>
  );

  const renderChapter = (chapter: ChapterData) => (
    <TouchableOpacity
      key={chapter.id}
      style={[
        styles.chapterCard,
        chapter.moduleNumber ? styles.moduleCard : styles.regularCard
      ]}
      onPress={() => onChapterSelect?.(chapter)}
    >
      <View style={styles.chapterHeader}>
        <Text style={[
          styles.chapterNumber,
          chapter.moduleNumber ? styles.moduleNumber : styles.regularNumber
        ]}>
          {chapter.moduleNumber ? `Module ${chapter.moduleNumber}` : `Chapter ${chapter.chapterNumber}`}
        </Text>
        {chapter.isBonus && (
          <Text style={styles.bonusLabel}>BONUS</Text>
        )}
      </View>
      
      <Text style={styles.chapterTitle}>{chapter.title}</Text>
      <Text style={styles.chapterDescription}>{chapter.description}</Text>
      
      {chapter.nasemsoAlignment && (
        <Text style={styles.nasemsoAlignment}>
          📋 {chapter.nasemsoAlignment}
        </Text>
      )}
      
      <View style={styles.topicsContainer}>
        {chapter.topics.slice(0, 3).map((topic, index) => (
          <Text key={index} style={styles.topicTag}>
            {topic}
          </Text>
        ))}
        {chapter.topics.length > 3 && (
          <Text style={styles.moreTopics}>+{chapter.topics.length - 3} more</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🚑 ProMedix EMS Curriculum</Text>
        <Text style={styles.headerSubtitle}>Complete EMT-B Training Program</Text>
      </View>

      {PROMEDIX_CURRICULUM.map((chapter) => renderChapter(chapter))}
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          📚 {PROMEDIX_CURRICULUM.length} Chapters Available
        </Text>
        <Text style={styles.footerSubtext}>
          Enhanced with NASEMSO 2022 Clinical Guidelines
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#94a3b8',
  },
  moduleHeader: {
    backgroundColor: 'linear-gradient(135deg, #1e40af, #3b82f6)',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
    padding: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#60a5fa',
  },
  moduleNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fbbf24',
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 5,
  },
  chapterCard: {
    marginHorizontal: 15,
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#1e293b',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  moduleCard: {
    backgroundColor: 'linear-gradient(135deg, #1e40af, #3b82f6)',
    borderColor: '#60a5fa',
    borderWidth: 2,
  },
  regularCard: {
    backgroundColor: '#1e293b',
  },
  chapterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  chapterNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  regularNumber: {
    color: '#3b82f6',
  },
  bonusLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fbbf24',
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  chapterDescription: {
    fontSize: 14,
    color: '#cbd5e1',
    lineHeight: 20,
    marginBottom: 12,
  },
  nasemsoAlignment: {
    fontSize: 12,
    color: '#10b981',
    fontStyle: 'italic',
    marginBottom: 12,
  },
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  topicTag: {
    fontSize: 11,
    color: '#60a5fa',
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(59, 130, 246, 0.2)',
  },
  moreTopics: {
    fontSize: 11,
    color: '#94a3b8',
    fontStyle: 'italic',
    alignSelf: 'center',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3b82f6',
    marginBottom: 4,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#94a3b8',
  },
});

export default ProMedixChapterList;