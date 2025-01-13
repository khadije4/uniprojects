def file_statistics(file_path):
   file= open(file_path, 'r', encoding='utf-8') 
   content = file.read()
   lines = content.splitlines()
   words = content.split()
   characters = len(content)
        
   print(f"Nombre de lignes : {len(lines)}")
   print(f"Nombre de mots : {len(words)}")
   print(f"Nombre de caractères : {characters}")
  


file_statistics('votre_fichier.txt')
def count_word_occurrences(file_path, target_word):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
            word_count = content.lower().split().count(target_word.lower())
        
        print(f"Le mot '{target_word}' apparaît {word_count} fois dans le fichier.")
    except FileNotFoundError:
        print("Le fichier spécifié est introuvable.")


count_word_occurrences('votre_fichier.txt', 'votre_mot')
def replace_word_in_file(file_path, old_word, new_word):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        updated_content = content.replace(old_word, new_word)
        
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(updated_content)
        
        print(f"Le mot '{old_word}' a été remplacé par '{new_word}' dans le fichier.")
    except FileNotFoundError:
        print("Le fichier spécifié est introuvable.")


replace_word_in_file('votre_fichier.txt', 'ancien_mot', 'nouveau_mot')

def same_length_recursive(str1, str2):
   
    if not str1 and not str2:
        return True
   
    if not str1 or not str2:
        return False
    
    return same_length_recursive(str1[1:], str2[1:])


print(same_length_recursive("hello", "world"))  
print(same_length_recursive("python", "java"))  
def remove_vowels_recursive(string):
    vowels = "aeiouAEIOU"
    
    if not string:
        return ""
   
    if string[0] in vowels:
        return remove_vowels_recursive(string[1:])
  
    return string[0] + remove_vowels_recursive(string[1:])


print(remove_vowels_recursive("hello world"))  
print(remove_vowels_recursive("Python"))       
