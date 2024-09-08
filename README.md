# Hacking-Simulator
This project is a fun hacking simulator that mimics the look of a terminal hack with blinking dots and random delay messages. The simulation concludes by displaying a "hacked" message, making it feel like a device has been compromised.

## Features

- Green text on a black background to mimic a hacker terminal.
- Messages appear with random delays, adding suspense to the simulation.
- A loading bar progresses at the bottom of the screen.
- After the simulation, the background changes to a "hacked" themed image, and a message indicating that the device has been hacked appears.
- Stylish font and animations for a realistic effect.

## view-1
![im](https://github.com/user-attachments/assets/8fbe974b-39db-46a4-8591-7123a3c94b7c)
## view -2
![Screenshot_29-7-2024_9110_](https://github.com/user-attachments/assets/81e8e8fd-167e-4199-83c9-ad45f9b82ddd)
## view -3
![img](https://github.com/user-attachments/assets/0594b20d-1855-4afd-9b3a-6507479fa194)
## Technologies Used

- HTML5
- CSS3 (with Google Fonts)
- JavaScript (Vanilla)

## How the Simulator Works

1. After a short delay, the page starts displaying the following messages with random delays between 1 to 7 seconds:
   - "Initializing Hacking..."
   - "Reading your Files..."
   - "Password files Detected..."
   - "Sending all passwords and personal files to server..."
   - "Cleaning up..."
   
2. Each message appears with blinking dots at the end, making it feel like the terminal is processing the action.

3. A loading bar is displayed at the bottom of the page and progresses during the simulation.

4. After the simulation ends, the page background changes, and a warning message is displayed indicating that the device has been hacked.

## Project Structure

```bash
├── index.html     # Main HTML file for the simulator
├── style.css      # CSS file for styling the simulator
├── script.js      # JavaScript file for message delays and animations
└── README.md      # This README file
