import dusterMotor from '../assets/gallery/duster-motor.jpg';
import fiatOficina from '../assets/gallery/fiat-oficina.jpg';
import injetores1 from '../assets/gallery/injetores-detalhe.jpg';
import dusterMotor2 from '../assets/gallery/duster-motor-2.jpg';
import injetores2 from '../assets/gallery/injetores-detalhe-2.jpg';
import cilindroSedan from '../assets/gallery/cilindro-sedan.jpg';
import cilindroHatch from '../assets/gallery/cilindro-hatch.jpg';
import cilindroSuv from '../assets/gallery/cilindro-suv.jpg';
import redutor from '../assets/gallery/redutor-detalhe.jpg';
import modulo from '../assets/gallery/modulo-detalhe.jpg';
import prismaMotor from '../assets/gallery/prisma-motor.jpg';
import corsaMotor from '../assets/gallery/corsa-motor.jpg';
import valvula from '../assets/gallery/valvula-abastecimento.jpg';

export const companyData = {
  name: "Carioca do Gás",
  tagline: "Especialistas em performance e economia para o seu veículo.",
  phone: "(92) 99316-0637 / (92) 99114-9464",
  whatsapp: "5592993160637",
  email: "willian_gnv@hotmail.com",
  address: "R. B, 430 - Tarumã, Manaus - AM CEP.: 69041-000",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=R.+B,+430+-+Tarum%C3%A3,+Manaus+-+AM,+69041-000",
  embedMapUrl: "https://maps.google.com/maps?q=R.+B,+430+-+Tarum%C3%A3,+Manaus+-+AM,+69041-000&t=&z=17&ie=UTF8&iwloc=&output=embed",
  workingHours: "Seg - Sex: 08:00 às 17:00 | Sáb: 08:00 às 12:00",
  social: {
    instagram: "https://www.instagram.com/carioca_do_gas?igsh=MTl2a3l4OXp3aXVseQ==",
    facebook: "https://www.facebook.com/share/1BAETCRAgQ/"
  },
  services: [
    {
      id: "conversao-gnv",
      title: "Conversão para GNV",
      description: "Instalação de kits GNV de 5ª e 6ª geração com tecnologia de ponta, garantindo máxima economia e performance sem perder a potência.",
      icon: "Wrench",
      link: "/galeria"
    },
    {
      id: "manutencao",
      title: "Manutenção Preventiva",
      description: "Revisão completa do sistema GNV, troca de filtros, velas e cabos para garantir a segurança e durabilidade do seu motor.",
      icon: "ShieldAlert"
    },
    {
      id: "teste-hidrostatico",
      title: "Teste Hidrostático",
      description: "Teste de segurança obrigatório nos cilindros, utilizando tecnologia avançada para garantir que seu equipamento esteja certificado e seguro para uso rodoviário.",
      icon: "Droplet"
    },
    {
      id: "injecao-eletronica",
      title: "Injeção Eletrônica",
      description: "Regulagem e diagnóstico avançado do sistema de injeção, ajustando a mistura de combustível para eficiência máxima no GNV e na gasolina.",
      icon: "Cpu"
    }
  ],
  gallery: [
    {
      url: dusterMotor,
      model: "Renault Duster",
      kit: "Kit 5ª Geração",
      description: "Instalação limpa e organizada no compartimento do motor, garantindo fácil acesso para manutenção."
    },
    {
      url: fiatOficina,
      model: "Fiat Toro (Frota)",
      kit: "Kit BRC Italiano",
      description: "Conversão de frota com tecnologia BRC, referência mundial em performance e confiabilidade."
    },
    {
      url: cilindroSedan,
      model: "Chevrolet Classic",
      kit: "Cilindro 16m³",
      description: "Instalação otimizada no porta-malas, mantendo o máximo de espaço útil possível."
    },
    {
      url: injetores1,
      model: "Detalhe Técnico",
      kit: "Bicos Injetores",
      description: "Flauta de bicos injetores de alta velocidade para uma resposta precisa na aceleração."
    },
    {
      url: prismaMotor,
      model: "Chevrolet Prisma",
      kit: "Kit 5ª Geração",
      description: "Configuração específica para motores GM, otimizando o consumo em trajetos urbanos."
    },
    {
      url: cilindroHatch,
      model: "Chevrolet Onix",
      kit: "Cilindro 10m³",
      description: "Solução compacta para veículos hatch, ideal para quem busca economia sem perder a praticidade."
    },
    {
      url: redutor,
      model: "Componente",
      kit: "Redutor de Pressão",
      description: "Redutor de alta performance com manômetro integrado para monitoramento constante."
    },
    {
      url: corsaMotor,
      model: "Chevrolet Corsa",
      kit: "Kit 5ª Geração",
      description: "Manutenção e regulagem eletrônica para garantir a longevidade do motor."
    },
    {
      url: modulo,
      model: "Eletrônica",
      kit: "ECU de Controle",
      description: "Módulo de controle inteligente que gerencia a transição suave entre gás e gasolina."
    },
    {
      url: cilindroSuv,
      model: "SUV Premium",
      kit: "Cilindro de Grande Capacidade",
      description: "Instalação robusta para veículos de grande porte, garantindo autonomia em viagens longas."
    },
    {
      url: valvula,
      model: "Segurança",
      kit: "Válvula de Abastecimento",
      description: "Ponto de abastecimento com válvula de segurança padrão Inmetro."
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "João Silva",
      role: "Motorista de App",
      content: "Serviço de primeira! A conversão ficou perfeita, o carro não perdeu potência e a economia no final do mês é absurda. Atendimento nota 10.",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Mendes",
      role: "Empresário",
      content: "Fiz o teste hidrostático e manutenção preventiva. A oficina é moderna, organizada e a equipe transmite muita confiança e profissionalismo.",
      rating: 5
    }
  ]
};
