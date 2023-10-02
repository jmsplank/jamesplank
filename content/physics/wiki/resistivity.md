+++
title = 'Resistivity'
date = 2023-09-25T17:49:54+01:00
draft = true
type = "wiki"
+++

{{< katex />}}

[Wiki](https://en.wikipedia.org/wiki/Spitzer_resistivity)

## Spitzer Resistivity

$$
\eta=\frac{1}{16\pi\epsilon_0\omega_{pe}}\frac{\ln\Lambda}{\Lambda}
$$

## Derivation from Plasma Resistivity

Start with equation of motion for a charged particle of charge $q$ under Coulomb force and Lorentz force and including a collisional term:

$$m\frac{d\vec{v}}{dt}=q\left(\vec{E}+\vec{v}\times\vec{B}\right)-m\nu_C\left(\vec{v}-\vec{u}\right)$$
Where $m$ is the mass of the particle, $\vec{v}$ is the particle velocity, $\nu_C$ is the Coulomb collision frequency and $\vec{u}$ is the bulk flow velocity.

From this, in an unmagnetised plasma, $\vec{B}=0$, set $\vec{v}=\vec{v_e}$, and all electron collision partners (ions) are stationary so that $\vec{u}=0$:

$$
\begin{align}
m_e\frac{d\vec{v_e}}{dt} &= -e\left(\vec{E}+ \cancel{\vec{v_e}\times\vec{B}}\right)-m_e\nu_C(\vec{v_e}-\cancel{\vec{u}}) \\
e\vec{E}-m_e\nu_C\vec{v_e} &= m_e\frac{d\vec{v_e}}{dt} \\
-\frac{e\vec{E}}{m_e} &= \cancel{\frac{d\vec{v_e}}{dt}} + \nu_C\vec{v_e} \\
\Rightarrow \vec{E} &= -\frac{m_e\nu_C}{e}\vec{v_e} \tag{1}
\end{align}
$$

Since electrons move at $\vec{v_e}$ and ions move at $\vec{0}$ there is a current
$$\vec{j}=-en_e\vec{v_e}\tag{2}$$
Therefore combining $(1)$ and $(2)$ we get Ohm's law:

$$
\boxed{\vec{E}=\frac{m_e\nu_C}{n_e e^2}\vec{j}}
$$

With a _plasma resistivity_, $\eta$:
$$\eta=\frac{m_e\nu_C}{n_e e^2}$$
Which can be transformed into the _Spitzer Resistivity_ in fully ionised plasmas using the Coulomb collision frequency
$$\nu_{ei}\approx\frac{\omega_{pe}}{16\pi}\frac{\ln\Lambda}{\Lambda}$$
for $\nu_C$ to get:

$$
\boxed{\eta_s=\frac{1}{16\pi\epsilon_0\omega_{pe}}\frac{\ln\Lambda}{\Lambda}}
$$
