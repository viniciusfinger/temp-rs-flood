package com.viniciusfinger.rsflood.model;

import com.viniciusfinger.rsflood.enums.BiologicalSex;
import com.viniciusfinger.rsflood.enums.PersonRace;
import com.viniciusfinger.rsflood.enums.Schooling;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String cpf;

    private LocalDate birthDate;

    @Enumerated(EnumType.STRING)
    private PersonRace race;

    @Enumerated(EnumType.STRING)
    private BiologicalSex biologicalSex;

    private String phone;

    private Boolean hasDocuments;

    //Colabora com a renda familiar
    private Boolean collaborateFamilyIncome;

    private String profession;

    @Enumerated(EnumType.STRING)
    private Schooling schooling;

    private Integer dependentsNumber;

    //PCD = CDC = Person with disability
    private boolean isPCD;
}
