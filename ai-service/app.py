from flask import Flask, jsonify
from sklearn.cluster import KMeans
import numpy as np
import pandas as pd

app = Flask(__name__)

# Sample data (in a real-world scenario, this would come from a database)
habits_data = pd.DataFrame({
    'user_id': [1, 1, 1, 2, 2, 3, 3, 3],
    'habit': ['Exercise', 'Read', 'Meditate', 'Cook', 'Study', 'Sleep early', 'Drink water', 'Walk'],
    'category': ['Health', 'Education', 'Wellness', 'Lifestyle', 'Education', 'Health', 'Health', 'Health']
})

# Prepare data for clustering
habit_categories = pd.get_dummies(habits_data['category'])
kmeans = KMeans(n_clusters=3, random_state=42)
kmeans.fit(habit_categories)

# Define habit suggestions for each cluster
suggestions = {
    0: [
        {"title": "Drink Water", "description": "Stay hydrated by drinking 8 glasses of water daily."},
        {"title": "Morning Stretch", "description": "Start your day with a 5-minute stretching session."},
        {"title": "Take Vitamins", "description": "Remember to take your daily vitamins."}
    ],
    1: [
        {"title": "Read a Book", "description": "Develop your mind by reading at least 20 pages daily."},
        {"title": "Learn a Language", "description": "Spend 15 minutes learning a new language."},
        {"title": "Solve Puzzles", "description": "Keep your brain active by solving puzzles or brain teasers."}
    ],
    2: [
        {"title": "Meditate", "description": "Practice mindfulness with a 10-minute daily meditation."},
        {"title": "Gratitude Journal", "description": "Write down three things you're grateful for each day."},
        {"title": "Digital Detox", "description": "Spend 1 hour away from screens before bedtime."}
    ]
}

@app.route('/generate-habit-suggestions', methods=['GET'])
def generate_habit_suggestions():
    # In a real-world scenario, you would get the user's habits from the database
    user_habits = habits_data[habits_data['user_id'] == 1]
    user_categories = pd.get_dummies(user_habits['category'])
    
    # Predict the cluster for the user
    cluster = kmeans.predict(user_categories.sum().values.reshape(1, -1))[0]
    
    # Return suggestions based on the cluster
    return jsonify(suggestions[cluster])

if __name__ == '__main__':
    app.run(debug=True)

