import tkinter as tk

def masuk(event):
    label.config(text="Mouse Masuk", fg="red")
    
def keluar(event):
    label.config(text="Mouse Keluar", fg="black")
    
root = tk.Tk()
root.title("Aplikasi")
root.geometry("300x200")

label = tk.Label(root, text="Arahkan Mouse ke sini", font=("Arial", 14))
label.pack(pady=20)

# Binding

label.bind("<Enter>", masuk)

label.bind("<Leave>", keluar)

root.mainloop()