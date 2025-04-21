import { View, Text, StyleSheet, Image, Button } from 'react-native';

import React, { useState, useEffect} from 'react';

export default function HomeScreen() {
    const [timeLeft, setTimeLeft] = useState('');

    {/* script for countdown to sign-ups */ }
    useEffect(() => {
        const targetTime = Date.now() + (9 * 24 * 60 * 60 * 1000) + (18 * 60 * 60 * 1000) + (3 * 60 * 1000)+ (27 * 1000);

        const interval = setInterval(() => {
            const now = Date.now();
            const difference = targetTime - now;

            if (difference <= 0) {
                setTimeLeft('Sign-Ups are Now Open!');
                clearInterval(interval);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / (1000 * 60)) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            {/* Header: Logo and Header */}
            <View style={styles.header}>
                <Image
                    source={require('../assets/images/favicon.png')}
                    style={{ width: 60, height: 60 }}
                    resizeMode="contain"
                />
                <Text style={styles.title}>Aldrich Sports League</Text>
            </View>

            {/* Countdown */}
            <Text style={styles.signupCountdown}>
                {timeLeft && `Sign-ups close in: ${timeLeft}`}
            </Text>

            {/* Tagline */}
            <View style={styles.section}>
                <Text style={styles.sectionTextTitle}>Welcome</Text>
                <Text style={styles.sectionTextSubtitle}>
                    The premier destination for competitive and community driven sports
                </Text>
                <View style={styles.underline} />
            </View>

            {/* 3. Sign-Up Button */}

            {/* 4. About / Upcoming */}

            {/* 5. Footer (optional) */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 0,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3e1cad',
        marginLeft: 12,
    },
    section: {
        marginTop: 20,
        alignItems: 'stretch',
        width: '100%'
    },
    sectionTextTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 6,
    },
    sectionTextSubtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 4,
    },
    underline: {
        width: 60,
        height: 2,
        backgroundColor: '#ccc',
        alignSelf: 'center',
        marginTop: 4,
    },
});