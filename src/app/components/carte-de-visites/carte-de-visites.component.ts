import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carte-de-visites',
  templateUrl: './carte-de-visites.component.html',
  styleUrls: ['./carte-de-visites.component.scss'],
})
export class CarteDeVisitesComponent implements OnInit {
  // utilisateur: FormGroup = this.formBuilder.group({
  //   nom: ['Lermite', Validators.minLength(2)],
  //   prenom: ['Bernard', Validators.minLength(2)],
  //   email: ['bernardlermite@crustace.com', Validators.email],
  //   entreprise: ['voleurdecoquille.org', Validators.minLength(2)],
  //   telephone: ['6666666666', Validators.minLength(10)],
  // });

  utilisateur: FormGroup = this.formBuilder.group({
    nom: ['', Validators.minLength(2)],
    prenom: ['', Validators.minLength(2)],
    email: ['', Validators.email],
    entreprise: ['', Validators.minLength(2)],
    telephone: ['', Validators.minLength(10)],
  });

  utilisateurs: any[] = [
    {
      nom: 'Lermite',
      prenom: 'Bernard',
      email: 'bernardlermite@crustace.com',
      entreprise: 'voleurdecoquille.org',
      telephone: '6666666666',
    },
  ];
  submitted: boolean = false;

  get form() {
    return this.utilisateur.controls;
  }
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  private ajoutUtilisateur(): void {
    this.utilisateurs.push(this.utilisateur.value);
    this.utilisateur.reset();
    this.submitted = false;
  }

  private supprimeUtilisateur(): void {
    this.utilisateurs.splice(this.utilisateurs.length - 1, 1);
    this.utilisateur.reset();
  }

  onSubmit(): boolean {
    this.submitted = true;
    if (this.utilisateur.invalid) {
      return false;
    } else {
      this.ajoutUtilisateur();
      return true;
    }
  }

  onDelete(): boolean {
    if (this.utilisateurs.length - 1 >= 0) {
      this.supprimeUtilisateur();
      return true;
    } else {
      return false;
    }
  }
}
